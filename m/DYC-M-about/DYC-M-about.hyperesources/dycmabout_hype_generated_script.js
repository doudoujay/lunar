//	HYPE.documents["DYC-M-about"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="DYC-M-about.hyperesources",c="DYC-M-about",e="dycmabout_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src;if(null!=b&&-1!=b.indexOf("dycmabout_hype_generated_script.js")){h=b.substr(0,b.lastIndexOf("/"));break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_526","HYPE_dtl_526",!0==(null!=a&&10>a||false==!0)?"HYPE-526.full.min.js":"HYPE-526.thin.min.js"),false==!0&&(a=a||l("HYPE_w_526","HYPE_wdtl_526","HYPE-526.waypoints.min.js")),a))return;
f=window.HYPE.documents;if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);for(var d=document.getElementsByTagName("div"),b=!1,a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"clicked",source:"function(hypeDocument, element, event) {\tif (isWeiXin()) {\n\t\thypeDocument.showSceneNamed('share', hypeDocument.kSceneTransitionCrossfade, 0.4)\n\t}\n\telse{\n\t\thypeDocument.showSceneNamed('nowechat', hypeDocument.kSceneTransitionCrossfade, 0.4)\n\t}\n\t\n\tthunmbUp()\n\t\n}",identifier:"153"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),
d[b[a].name]=function(){}}a=new HYPE_526(c,e,{"18":{p:1,n:"05line.png",g:"22",o:true,t:"@1x"},"10":{p:1,n:"05button1_2x.png",g:"15",o:true,t:"@2x"},"19":{p:1,n:"05line_2x.png",g:"22",o:true,t:"@2x"},"11":{p:1,n:"05button2.png",g:"16",o:true,t:"@1x"},"0":{p:1,n:"05bg1.png",g:"10",o:true,t:"@1x"},"12":{p:1,n:"05button2_2x.png",g:"16",o:true,t:"@2x"},"1":{p:1,n:"05bg1_2x.png",g:"10",o:true,t:"@2x"},"20":{p:1,n:"05title.png",g:"23",t:"@1x"},"2":{p:1,n:"05bg2.png",g:"11",o:true,t:"@1x"},"13":{p:1,n:"05content1.png",g:"17",t:"@1x"},"3":{p:1,n:"05bg2_2x.png",g:"11",o:true,t:"@2x"},"21":{p:1,n:"05bg.png",g:"38",t:"@1x"},"14":{p:1,n:"05content2.png",g:"18",t:"@1x"},"4":{p:1,n:"05bg3.png",g:"12",o:true,t:"@1x"},"5":{p:1,n:"05bg3_2x.png",g:"12",o:true,t:"@2x"},"15":{p:1,n:"05content3.png",g:"19",t:"@1x"},"22":{p:1,n:"share1.png",g:"138",t:"@1x"},"6":{p:1,n:"05bg4.png",g:"13",o:true,t:"@1x"},"16":{p:1,n:"05content4.png",g:"20",t:"@1x"},"7":{p:1,n:"05bg4_2x.png",g:"13",o:true,t:"@2x"},"8":{p:1,n:"05button_clicked.png",g:"14",t:"@1x"},"17":{p:1,n:"05content5.png",g:"21",t:"@1x"},"9":{p:1,n:"05button1.png",g:"15",o:true,t:"@1x"}},h,[],d,[{n:"main",o:"1",X:[0]},{n:"share",o:"110",X:[1]},{n:"nowechat",o:"154",X:[2]}],[{o:"9",p:"600px",x:0,a:100,Z:568,cA:false,Y:320,b:100,c:"#FFFFFF",L:[],bY:1,d:320,U:{},T:{"106":{i:"106",n:"click-button",z:0.11,b:[],a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{b:"109",symbolOid:"8",p:7}]},o:"106"},{f:"c",y:0,z:0.11,i:"e",e:-1,s:0,o:"228"},{f:"c",y:0,z:0.11,i:"e",e:0,s:1,o:"227"},{f:"c",y:0,z:0.1,i:"e",e:1,s:0,o:"229"},{y:0.1,i:"e",s:1,z:0,o:"229",f:"c"},{y:0.11,i:"e",s:-1,z:0,o:"228",f:"c"},{y:0.11,i:"e",s:0,z:0,o:"227",f:"c"}],f:30},"109":{i:"109",n:"blink",z:0.27,b:[],a:[{f:"c",y:0,z:0.14,i:"e",e:1,s:0,o:"228"},{f:"c",y:0.14,z:0.13,i:"e",e:0,s:1,o:"228"},{f:"c",p:2,y:0.27,z:0,i:"ActionHandler",s:{a:[{i:0,b:"109",p:9,symbolOid:"8"}]},o:"109"},{y:0.27,i:"e",s:0,z:0,o:"228",f:"c"}],f:30},kTimelineDefaultIdentifier:{f:30,z:1,i:"kTimelineDefaultIdentifier",n:"\u4e3b\u65f6\u95f4\u7ebf",j:{"0":[[69,-41,69,-41,69,75,69,75]]},a:[{o:"222",y:0,z:1,i:"a",e:30,a:"0",f:"g",s:30},{o:"222",y:0,z:1,i:"b",e:35.5,a:"0",f:"g",s:-80.5},{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{b:"109",p:3,z:false,symbolOid:"8"}]},o:"kTimelineDefaultIdentifier"},{y:1,i:"a",s:30,z:0,o:"222",f:"c"},{y:1,i:"b",s:36,z:0,o:"222",f:"c"}],b:[]}},bZ:180,O:["214","212","217","216","215","213","211","228","227","229","226","223","222","225","224","221","219","220","218"],v:{"216":{h:"18",p:"no-repeat",x:"visible",a:16,q:"100% 100%",b:83,j:"absolute",bF:"211",c:180,k:"div",z:3,d:40,r:"inline"},"222":{h:"12",p:"no-repeat",x:"visible",tY:0.5,q:"100% 100%",a:30,j:"absolute",b:-80.5,z:3,k:"div",bF:"221",d:79,c:78,r:"inline",f:0,tX:0.5},"211":{k:"div",x:"visible",c:209,d:233,z:13,a:55,j:"absolute",bS:383,b:21},"219":{h:"22",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:148,j:"absolute",bF:"218",c:320,k:"div",z:2,d:243,r:"inline"},"214":{h:"21",p:"no-repeat",x:"visible",a:64,q:"100% 100%",b:189,j:"absolute",bF:"211",c:88,k:"div",z:6,d:39,r:"inline"},"220":{h:"38",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"218",c:320,k:"div",z:1,d:568,r:"inline"},"225":{h:"11",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:78,j:"absolute",bF:"221",c:320,k:"div",z:2,d:85.5,r:"inline"},"228":{h:"15",p:"no-repeat",x:"visible",a:-10,q:"100% 100%",b:-11,j:"absolute",bS:0,z:4,k:"div",cY:"0",d:107,bF:"226",c:108,e:0,r:"inline"},"217":{h:"19",p:"no-repeat",x:"visible",a:81,q:"100% 100%",b:135,j:"absolute",bF:"211",c:48,k:"div",z:4,d:23,r:"inline"},"212":{h:"20",p:"no-repeat",x:"visible",a:11,q:"100% 100%",b:165,j:"absolute",bF:"211",z:5,k:"div",c:193,d:17,r:"inline",aB:{a:[{p:6,l:"hr@dengyuecang.com"}]}},"223":{h:"13",p:"no-repeat",x:"visible",a:46,q:"100% 100%",b:0,j:"absolute",bF:"221",z:4,k:"div",c:219,d:156,r:"inline",aB:{a:[{p:0}]}},"226":{x:"visible",k:"div",c:88,d:85,aB:{a:[{b:"106",p:3,z:false,symbolOid:"8"},{p:4,h:"153"}]},z:9,e:1,a:116,j:"absolute",bS:343,b:290},"215":{h:"17",p:"no-repeat",x:"visible",a:79,q:"100% 100%",b:46,j:"absolute",bF:"211",c:49,k:"div",z:2,d:23,r:"inline"},"221":{k:"div",x:"visible",c:320,d:164,z:4,a:0,j:"absolute",bS:415,b:404},"229":{p:"no-repeat",bJ:1,c:108,q:"100% 100%",bS:320,d:107,r:"inline",cY:"0",e:0,bL:0,aP:"pointer",h:"14",i:"button",bF:"226",j:"absolute",x:"visible",k:"div",bG:0,z:1,a:-10,b:-11},"218":{k:"div",x:"visible",c:320,d:568,z:1,a:0,j:"absolute",bS:447,b:0},"213":{h:"23",p:"no-repeat",x:"visible",a:21,q:"100% 100%",b:0,j:"absolute",bF:"211",c:170,k:"div",z:1,d:31,r:"inline"},"224":{h:"10",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:36,j:"absolute",bF:"221",c:320,k:"div",z:1,d:128,r:"inline"},"227":{h:"16",p:"no-repeat",x:"visible",a:-10,q:"100% 100%",b:-11,j:"absolute",bF:"226",z:2,k:"div",c:108,d:107,r:"inline",e:1}}},{o:"135",A:{a:[{p:4}]},p:"600px",x:1,a:100,Z:568,cA:false,Y:320,b:100,c:"#FFFFFF",L:[],bY:1,d:320,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"\u4e3b\u65f6\u95f4\u7ebf",z:0.16,b:[],a:[{f:"c",y:0,z:0.15,i:"e",e:0,s:1,o:"235"},{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:4}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:0,z:0.15,i:"c",e:410,s:108,o:"236"},{f:"c",y:0,z:0.15,i:"a",e:-161,s:-10,o:"236"},{f:"c",y:0,z:0.15,i:"d",e:407,s:107,o:"236"},{f:"c",y:0,z:0.15,i:"b",e:-161,s:-11,o:"236"},{f:"c",y:0,z:0.09,i:"e",e:1,s:0.40000000000000002,o:"245"},{y:0.09,i:"e",s:1,z:0,o:"245",f:"c"},{f:"c",y:0.15,z:0.01,i:"d",e:297,s:407,o:"236"},{f:"c",y:0.15,z:0.01,i:"a",e:-106,s:-161,o:"236"},{f:"c",y:0.15,z:0.01,i:"b",e:-106,s:-161,o:"236"},{f:"c",y:0.15,z:0.01,i:"c",e:300,s:410,o:"236"},{y:0.15,i:"e",s:0,z:0,o:"235",f:"c"},{y:0.16,i:"d",s:297,z:0,o:"236",f:"c"},{y:0.16,i:"c",s:300,z:0,o:"236",f:"c"},{y:0.16,i:"b",s:-106,z:0,o:"236",f:"c"},{y:0.16,i:"a",s:-106,z:0,o:"236",f:"c"}],f:30}},bZ:180,O:["241","244","243","242","240","236","235","245","248","249","251","250","252","247","246","233","234","232","231","230","238","239","237"],v:{"238":{h:"22",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:148,j:"absolute",bF:"237",c:320,k:"div",z:2,d:243,r:"inline"},"250":{h:"18",p:"no-repeat",x:"visible",a:16,q:"100% 100%",b:83,j:"absolute",bF:"246",c:180,k:"div",z:3,d:40,r:"inline"},"242":{G:"#041527",aU:8,c:126,d:44,aV:8,r:"inline",s:"Chalkduster,Papyrus,fantasy",t:30,Z:"break-word",i:"countText",w:"0",bF:"240",j:"absolute",x:"visible",k:"div",y:"preserve",z:1,aS:8,aT:8,a:0,F:"center",b:-4},"234":{h:"12",p:"no-repeat",x:"visible",tY:0.5,q:"100% 100%",a:30,j:"absolute",b:35.5,z:3,k:"div",bF:"230",d:79,c:78,r:"inline",f:0,tX:0.5},"247":{h:"23",p:"no-repeat",x:"visible",a:21,q:"100% 100%",b:0,j:"absolute",bF:"246",c:170,k:"div",z:1,d:31,r:"inline"},"239":{h:"38",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"237",c:320,k:"div",z:1,d:568,r:"inline"},"230":{k:"div",x:"visible",c:320,d:164,z:4,a:0,j:"absolute",bS:415,b:404},"251":{h:"19",p:"no-repeat",x:"visible",a:81,q:"100% 100%",b:135,j:"absolute",bF:"246",c:48,k:"div",z:4,d:23,r:"inline"},"243":{G:"#FFFFFF",aU:8,c:49,aV:8,d:16,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",w:"\u4f60\u662f\u7b2c<br>",bF:"240",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:-6,b:2},"235":{x:"visible",k:"div",c:88,d:85,aB:{a:[{b:"133",p:3,z:false,symbolOid:"8"},{p:0}]},z:16,e:1,a:116,j:"absolute",bS:383,b:290},"248":{h:"21",p:"no-repeat",x:"visible",a:64,q:"100% 100%",b:189,j:"absolute",bF:"246",c:88,k:"div",z:6,d:39,r:"inline"},"231":{h:"10",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:36,j:"absolute",bF:"230",c:320,k:"div",z:1,d:128,r:"inline"},"252":{h:"17",p:"no-repeat",x:"visible",a:79,q:"100% 100%",b:46,j:"absolute",bF:"246",c:49,k:"div",z:2,d:23,r:"inline"},"244":{G:"#FFFFFF",aU:8,c:17,aV:8,d:16,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",w:"\u4eba<br>",bF:"240",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:83,b:2},"236":{p:"no-repeat",bJ:1,c:108,q:"100% 100%",bS:320,d:107,r:"inline",e:1,bL:0,aP:"pointer",h:"14",bF:"235",j:"absolute",x:"visible",aA:{a:[{p:0}]},k:"div",bG:0,aB:{a:[{p:0}]},z:2,a:-10,b:-11},"249":{h:"20",p:"no-repeat",x:"visible",a:11,q:"100% 100%",b:165,j:"absolute",bF:"246",z:5,k:"div",c:193,d:17,r:"inline",aB:{a:[{p:6,l:"hr@dengyuecang.com"}]}},"240":{x:"visible",k:"div",c:118,d:58,z:17,e:1,a:108,j:"absolute",bS:343,b:305},"232":{h:"11",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:78,j:"absolute",bF:"230",c:320,k:"div",z:2,d:85.5,r:"inline"},"245":{h:"138",p:"no-repeat",x:"visible",a:0,q:"100% 100%",bS:183,j:"absolute",b:0,z:13,k:"div",c:320,d:568,r:"inline",e:0.40000000000000002},"237":{k:"div",x:"visible",c:320,d:568,z:1,a:0,j:"absolute",bS:447,b:0},"241":{G:"#FFFFFF",aU:8,c:113,aV:8,d:17,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",w:"\u611f\u89c9\u767b\u6708\u8231\u5f88\u68d2<br>",bF:"240",j:"absolute",x:"visible",k:"div",y:"preserve",z:4,aS:8,aT:8,a:-6,b:26},"233":{h:"13",p:"no-repeat",x:"visible",a:46,q:"100% 100%",b:0,j:"absolute",bF:"230",z:4,k:"div",c:219,d:156,r:"inline",aB:{a:[{p:0}]}},"246":{k:"div",x:"visible",c:209,d:233,z:12,a:55,j:"absolute",bS:383,b:21}}},{o:"156",p:"600px",x:2,a:100,Z:568,cA:false,Y:320,b:100,c:"#FFFFFF",L:[],bY:1,d:320,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"\u4e3b\u65f6\u95f4\u7ebf",z:0.16,b:[],a:[{f:"c",y:0,z:0.15,i:"d",e:407,s:107,o:"259"},{f:"c",y:0,z:0.15,i:"e",e:0,s:1,o:"259"},{f:"c",y:0,z:0.15,i:"a",e:-161,s:-10,o:"259"},{f:"c",y:0,z:0.15,i:"c",e:410,s:108,o:"259"},{f:"c",y:0,z:0.15,i:"b",e:-161,s:-11,o:"259"},{f:"c",y:0.15,z:0.01,i:"a",e:-106,s:-161,o:"259"},{f:"c",y:0.15,z:0.01,i:"c",e:300,s:410,o:"259"},{f:"c",y:0.15,z:0.01,i:"d",e:297,s:407,o:"259"},{f:"c",y:0.15,z:0.01,i:"b",e:-106,s:-161,o:"259"},{y:0.15,i:"e",s:0,z:0,o:"259",f:"c"},{y:0.16,i:"d",s:297,z:0,o:"259",f:"c"},{y:0.16,i:"b",s:-106,z:0,o:"259",f:"c"},{y:0.16,i:"a",s:-106,z:0,o:"259",f:"c"},{y:0.16,i:"c",s:300,z:0,o:"259",f:"c"}],f:30}},bZ:180,O:["256","254","257","255","253","259","258","266","264","267","265","263","262","261","260"],v:{"258":{x:"visible",k:"div",c:88,d:85,aB:{a:[{b:"133",p:3,z:false,symbolOid:"8"},{p:0}]},z:8,e:1,a:116,j:"absolute",bS:383,b:290},"264":{h:"12",p:"no-repeat",x:"visible",tY:0.5,q:"100% 100%",a:30,j:"absolute",b:35.5,z:3,k:"div",bF:"263",d:79,c:78,r:"inline",f:0,tX:0.5},"253":{x:"visible",k:"div",c:118,d:58,z:9,e:1,a:101,j:"absolute",bS:343,b:220},"267":{h:"11",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:78,j:"absolute",bF:"263",c:320,k:"div",z:2,d:85.5,r:"inline"},"256":{G:"#FFFFFF",aU:8,c:113,aV:8,d:17,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",w:"\u611f\u89c9\u767b\u6708\u8231\u5f88\u68d2<br>",bF:"253",j:"absolute",x:"visible",k:"div",y:"preserve",z:4,aS:8,aT:8,a:-6,b:26},"262":{h:"22",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:148,j:"absolute",bF:"260",c:320,k:"div",z:2,d:243,r:"inline"},"259":{p:"no-repeat",bJ:1,c:108,q:"100% 100%",bS:320,d:107,r:"inline",e:1,bL:0,aP:"pointer",h:"14",bF:"258",j:"absolute",x:"visible",aA:{a:[{p:0}]},k:"div",bG:0,aB:{a:[{p:0}]},z:2,a:-10,b:-11},"254":{G:"#FFFFFF",aU:8,c:17,aV:8,d:16,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",w:"\u4eba<br>",bF:"253",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:95,b:2},"260":{k:"div",x:"visible",c:320,d:568,z:1,a:0,j:"absolute",bS:447,b:0},"265":{h:"10",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:36,j:"absolute",bF:"263",c:320,k:"div",z:1,d:128,r:"inline"},"257":{G:"#FFFFFF",aU:8,c:49,aV:8,d:16,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",w:"\u4f60\u662f\u7b2c<br>",bF:"253",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:-6,b:2},"263":{k:"div",x:"visible",c:320,d:164,z:3,a:0,j:"absolute",bS:415,b:404},"266":{h:"13",p:"no-repeat",x:"visible",a:46,q:"100% 100%",b:0,j:"absolute",bF:"263",z:4,k:"div",c:219,d:156,r:"inline",aB:{a:[{p:0}]}},"255":{G:"#041527",aU:8,c:132,d:44,aV:8,r:"inline",s:"Chalkduster,Papyrus,fantasy",t:30,Y:32,Z:"break-word",i:"countText_nowechat",w:"0",bF:"253",j:"absolute",x:"visible",k:"div",y:"preserve",z:1,aS:8,aT:8,a:0,F:"center",b:-1},"261":{h:"38",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"260",c:320,k:"div",z:1,d:568,r:"inline"}}}],{},g,{g:[[0,0,0.0425,0.22,0.089,1.373,0.169,1.373],[0.169,1.373,0.223,1.373,0.2656,0.868,0.356,0.868],[0.356,0.868,0.4085,0.868,0.457,1.047,0.544,1.047],[0.544,1.047,0.5976,1.047,0.637,0.984,0.731,0.984],[0.731,0.984,0.794,0.984,0.829,1.006,0.919,1.006],[0.919,1.006,0.953,1.006,1,1,1,1]]},null,false,true,-1,true,true,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
