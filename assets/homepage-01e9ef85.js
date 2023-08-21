import{n as r,j as t,F as i,a as o,ax as g,D as p,al as h,b2 as u,b3 as m,I as b,T as f}from"./index-6a32c621.js";import{H as k}from"./seo-25fd4aea.js";const x="/althea-app/assets/bg-5f337ca0.jpg",w=r.span`
font-family: 'Macan';
`,v=r.span`
font-family: 'MacanFont';
`;function y(n){const e=n.split(" ");return t(i,{children:e.map((s,d)=>{const l=new Set;return o(g.Fragment,{children:[s.split("").map((a,c)=>!l.has(a.toUpperCase())&&"GANTO".includes(a.toUpperCase())?(l.add(a.toUpperCase()),t(v,{children:a},c)):t(w,{children:a},c)),d<e.length-1&&t(i,{children:" "})]},d)})})}const T=()=>{const{theme:n}=p.useContext(h);return o(i,{children:[t(k,{title:"Althea Web App",description:"Althea Web App enables IFi accesibility",link:""}),o(F,{theme:n,children:[t("ul",{className:"options",id:"routes",children:u.map((e,s)=>e.showInMenu?t(m,{to:e.link,id:e.name,onClick:()=>b.events.landingPageActions.navigatedTo(e.name),children:t(f,{type:"title",size:"title1",align:"left",className:"navLink",children:y(e.name)})},e.name):null)}),t("div",{className:"right"})]})]})},F=r.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  margin: 2rem auto;
  height: 100%;
  z-index: 0;

  .right {
    display: grid;
    place-items: center;
  }
  .options {
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 2;
    align-items: flex-start;
    width: 100%;
  }
  .bg {
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-color: black;
    background: url(${x}),
      linear-gradient(90deg, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 60%),
      linear-gradient(180deg, #0077FF 0%, #0077FF 50%, rgba(0, 0, 0, 1) 100%);
    background-position: 100%;
    background-size: auto 100%;
    top: 0;
    background-repeat: no-repeat, repeat;

    &::after {
      content: " ";
      position: absolute;
      height: 100vh;
      width: 100vw;
      background: linear-gradient(
        90deg,
        #00000015,
        #000000b9,
        #00000013,
        #000000c0
      );
      background-size: 200% 200%;
      animation: movingFade 10s ease infinite;
      @keyframes movingFade {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
    }
  }

  a {
    width: 60%;
  }

.navLink {
  height: 68px;
  transition: all 0.3s ease;
  width: 100%;
  /* padding-left: 1rem; */
  border-radius: 4px;
  transition: background-color 0.6s ease-in;
  transition: transform 0.3s ease-in-out;
  background-color: transparent;
  background-size: 0% 100%;
  &:hover {
    padding-left: 1rem;

    color: ${n=>n.theme==="light"?"black":"white"};
    background-image: ${n=>n.theme==="dark"?"linear-gradient(to right, #0E2137 0%, #0E2137 40%, #0E2137 100%)":"linear-gradient(to right, #f3f3f3 0%, #f3f3f3 40%, #f3f3f3 100%)"};
    background-repeat: no-repeat;
    background-size: 200% 100%;
    transition: background-size 0.7s, background-color 0.7s;
    transform: scale(1.1);
  }
}
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    .options {
      width: 100vw;
    }
    .right {
      display: flex;
      width: 100%;
    }
    a {
      width: 80%;
      margin: 0 auto;
    }

    .navLink {
      font-size: 24px;
      width: 100%;
    }
  }
`;export{T as default,y as parseText};
