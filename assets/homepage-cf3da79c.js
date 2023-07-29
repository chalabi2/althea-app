import{n as r,j as e,F as i,a as o,a_ as g,bi as p,bj as u,U as h,T as m}from"./index-a9f7e3fe.js";import{H as b}from"./seo-9eee2d27.js";const f="/althea-app/assets/bg-5f337ca0.jpg",k=r.span`
font-family: 'Macan';
`,w=r.span`
font-family: 'MacanFont';
`;function x(n){const a=n.split(" ");return e(i,{children:a.map((c,s)=>{const d=new Set;return o(g.Fragment,{children:[c.split("").map((t,l)=>!d.has(t.toUpperCase())&&"GANTO".includes(t.toUpperCase())?(d.add(t.toUpperCase()),e(w,{children:t},l)):e(k,{children:t},l)),s<a.length-1&&e(i,{children:" "})]},s)})})}const z=()=>o(i,{children:[e(b,{title:"Althea Web App",description:"Althea Web App enables IFi accesibility",link:""}),o(v,{children:[e("ul",{className:"options",id:"routes",children:p.map((n,a)=>n.showInMenu?e(u,{to:n.link,id:n.name,onClick:()=>h.events.landingPageActions.navigatedTo(n.name),children:e(m,{type:"title",size:"title1",align:"left",className:"navLink",children:x(n.name)})},n.name):null)}),e("div",{className:"right"})]})]}),v=r.div`
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
    background: url(${f}),
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

      color: white;
      background-image: linear-gradient(
        to right,
        #0E2137 0%,
        #0E2137 40%,
        #0E2137 100%
      );
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
`;export{z as default,x as parseText};
