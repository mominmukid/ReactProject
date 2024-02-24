const coustomreder=(reactEle,contenor)=>{
   // const ele=document.createElement(reactEle.type);
   // ele.setAttribute('href',reactEle.props.href);
   // ele.setAttribute('target',reactEle.props.target);
   // ele.innerHTML=reactEle.children;
   // contenor.appendChild(ele);
   const element=document.createElement(reactEle.type);
   element.innerHTML=reactEle.children;
   for (const prop in reactEle.props) {
      if (prop==='children')continue; 
      element.setAttribute(prop,reactEle.props[prop]);
   }
   contenor.appendChild(element);
}
const reactEle={
   type:'a',
   props:{
      href:'http://google.com',
      target:'_self',
   },
   children:"Click the open for google",

}
const maincontenor=document.getElementById('root');
coustomreder(reactEle,maincontenor);