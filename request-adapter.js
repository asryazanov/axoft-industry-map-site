/* One boundary for a future server integration. The demo never transmits requests. */
(function () {
  'use strict';
  const fields = {fio:'ФИО',company:'Компания-партнёр',contact:'Контакт',task:'Задача',comment:'Комментарий',inn:'ИНН',okved:'ОКВЭД',lpr:'Роль заказчика',term:'Срок проекта',ptype:'Тип партнёра',isPartner:'Партнёр Axoft',pilot:'Нужен пилот',fin:'Нужны финансовые сервисы',extra:'Дополнение подборки'};
  window.AxoftRequestAdapter = Object.freeze({
    prepare(form, classes) {
      return {schemaVersion:1,mode:'demo',createdAt:new Date().toISOString(),catalogDate:'2026-09-28',form:{...form},classes:classes.map(c=>({id:c.id,name:c.name,layer:c.layer,code:c.code,zone:c.zone,items:[...c.items]}))};
    },
    download(request) {
      const lines=['Axoft - запрос по промышленному предприятию','ДЕМОВЕРСИЯ. Запрос не отправлен в Axoft.','Дата подготовки: '+new Date(request.createdAt).toLocaleString('ru-RU'),'Каталог по материалам от 28.09.2026',''];
      for(const [key,label] of Object.entries(fields)) {
        const value=request.form[key];
        if(typeof value==='boolean')lines.push(label+': '+(value?'да':'нет'));
        else if(value&&String(value).trim())lines.push(label+': '+String(value).trim());
      }
      lines.push('','Подборка классов решений ('+request.classes.length+'):');
      request.classes.forEach((c,i)=>lines.push((i+1)+'. '+c.name,c.layer+' · '+c.code+' · '+c.zone,'Позиции каталога: '+(c.items.join('; ')||'данные не указаны'),''));
      if(!request.classes.length)lines.push('Классы решений не выбраны.');
      const blob=new Blob(['\uFEFF'+lines.join('\n')],{type:'text/plain;charset=utf-8'});
      const url=URL.createObjectURL(blob),link=document.createElement('a');
      link.href=url;link.download='Axoft_Запрос_'+request.createdAt.slice(0,10)+'.txt';
      document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
    }
  });
})();
