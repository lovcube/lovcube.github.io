(this.webpackJsonpframeweb=this.webpackJsonpframeweb||[]).push([[5],{741:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));a(72);var n=a(13),i=a(8),r=a(10),s=a(21),o=a(22),c=a(23),l=a(0),m=a.n(l),u=(a(752),a(271)),p=a(158),f=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"second-header"},m.a.createElement("div",{className:"logo"},m.a.createElement("h1",null,m.a.createElement("a",{href:"/"},"Photo Frame"))),m.a.createElement("div",{className:"title"},m.a.createElement("p",null,this.props.title)),m.a.createElement("div",{className:"second-header-right clearfix"},m.a.createElement("div",{className:"language-inner"},m.a.createElement(u.a,null)),m.a.createElement("div",{className:"buy-btn"},m.a.createElement("a",{href:p.a,target:"_blank",rel:"noopener noreferrer"},m.a.createElement(n.a,{type:"picture",theme:"filled"}),this.props.buyBtn))))}}]),t}(l.Component)},749:function(e,t,a){},752:function(e,t,a){},764:function(e,t,a){"use strict";a(72);var n,i,r=a(13),s=(a(64),a(17)),o=a(8),c=a(10),l=a(21),m=a(22),u=a(23),p=a(0),f=a.n(p),d=a(79),h=a.n(d),v=a(36),b=a(19),g=a(7),E=a(6),y=(a(749),a(750)),C=a.n(y),O=(a(751),Object(v.b)()(n=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).image=f.a.createRef(),a.state={myCropper:null,afterImg:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=new C.a(this.image.current,{viewMode:1,dragMode:"none",initialAspectRatio:1,aspectRatio:1,preview:".before",background:!1,autoCropArea:.6,zoomOnWheel:!1});this.setState({myCropper:t},(function(){e.state.myCropper.replace(e.props.img)}))}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=e.img;this.props.img!==t&&this.state.myCropper.replace(t)}},{key:"render",value:function(){var e=this,t=this.props,a=t.t,n=t.confirm,i=t.cancel;return f.a.createElement("div",{className:"preview_picture"},f.a.createElement("div",{className:"preview_left"},f.a.createElement("div",{className:"show-img"},f.a.createElement("img",{src:this.props.img,ref:this.image,alt:""})),f.a.createElement("div",{className:"preview_btn"},f.a.createElement("span",{className:"confirm",onClick:function(){n(e.state.myCropper)}},a("Determine")),f.a.createElement("span",{className:"cancel",onClick:i},a("Cancel")))),f.a.createElement("div",{className:"preview_right"},f.a.createElement("p",null,a("imagePreview")),f.a.createElement("div",{className:"before"})))}}]),t}(f.a.Component))||n);var j=Object(v.b)()(i=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){if(e.target.files.length>0){var t=e.target.files[0];if(t.size/1024/1024>3)return void s.a.error(b.a.t("Picsize"));!function(e,t){var a=new FileReader;a.addEventListener("load",(function(){return t(a.result)})),a.readAsDataURL(e)}(t,(function(e){a.setState({imageUrl:e,file:t})}))}},a.handleCancel=function(){a.props.handleCancel()},a.handleconfirm=function(e){a.props.handleCancel();var t="portrait";s.a.loading({content:"uploading...",key:t,duration:0});var n=a.state.file,i=e.getCroppedCanvas({imageSmoothingQuality:"high"}).toDataURL("image/jpeg"),r=h.a.lib.WordArray.create(i),o=h.a.SHA256(r).toString(),c=Object(E.e)(i);Object(E.b)(c,"".concat(Object(g.a)(),"/up/p/").concat(Object(E.g)("cookie"),"/").concat(o,"/").concat(n.name)).then((function(e){Object(g.b)("user_profile_id_save",e.id).then((function(n){s.a.success({content:"succeed!",key:t,duration:2}),a.props.callback(null,e.id)})).catch((function(){s.a.error({content:"come to nothing",key:t,duration:3})}))}))},a.imageRef=f.a.createRef(),a.state={imageUrl:null},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.imageUrl,a=this.props,n=a.t,i=a.handleCancel;return f.a.createElement("div",{className:"Headportrait-wrap"},f.a.createElement("div",{className:"Modify_the_picture"},f.a.createElement("span",{className:"close-icon",onClick:i},f.a.createElement(r.a,{type:"close"})),f.a.createElement("div",{className:"Modify_head"},n("Headimage")),f.a.createElement("div",{className:"Modify_content"},f.a.createElement("p",null,n("uploadavatar")),f.a.createElement("div",{className:"Modify_openimg"},f.a.createElement("input",{type:"button",className:"pass-portrait-filebtn",name:"openImgBtn",id:"openImgBtn",value:n("Choosepicture")}),f.a.createElement("input",{type:"file",className:"pass-portrait-file",accept:"image/bmp,image/jpeg,image/png",name:"file",id:"fileImg",onChange:function(t){e.handleChange(t)}}),f.a.createElement("span",{className:"pass-portrait-msg"},n("SupportPic"))),t&&f.a.createElement(O,{img:this.state.imageUrl,confirm:this.handleconfirm,cancel:this.handleCancel}))))}}]),t}(f.a.Component))||i;t.a=j},829:function(e,t,a){},984:function(e,t,a){"use strict";a.r(t);a(522);var n,i,r,s,o,c=a(135),l=(a(814),a(930)),m=(a(187),a(117)),u=(a(767),a(811)),p=(a(72),a(13)),f=(a(819),a(929)),d=(a(64),a(17)),h=a(8),v=a(10),b=a(21),g=a(22),E=a(23),y=(a(812),a(810)),C=(a(826),a(981)),O=a(0),j=a.n(O),k=a(102),N=a(36),_=a(39),w=(a(829),a(6)),S=a(7),R=a(764),I=a(741),x=(a(155),a(98)),q=Object(N.b)()(n=y.a.create({name:"questions"})(n=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.props.form.setFieldsValue({text:this.props.val})}},{key:"render",value:function(){var e=this.props,t=e.visible,a=e.onCancel,n=e.onCreate,i=e.form,r=e.t,s=i.getFieldDecorator;return j.a.createElement(x.a,{visible:t,title:r("CustomQuestions"),okText:r("Determine"),onOk:n,onCancel:a,getContainer:!1},j.a.createElement(y.a.Item,{label:r("securityQuestion")},s("text",{rules:[{required:!0,message:r("enterQuestion"),whitespace:!0},{max:100,message:r("Notmorechar")}]})(j.a.createElement(u.a,{autoComplete:"off",placeholder:r("enterQuestion")}))))}}]),t}(O.Component))||n)||n,A=a(12),F=C.a.Option,D=(i=Object(N.b)(),r=y.a.create({name:"perfectinformation"}),s=Object(_.b)("login","playlist","rahmen","photoalbum"),i(o=r(o=Object(k.g)(o=s(o=Object(_.c)(o=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(b.a)(this,Object(g.a)(t).call(this,e))).show=function(e){e.nativeEvent.stopImmediatePropagation(),a.setState({pro_visible:!0,fiag:!0})},a.setCustom=function(e){a.setState({custom:!0,checkId:0}),setTimeout((function(){a.customRef.current.focus()}),0)},a.input_focus=function(e,t){e.nativeEvent.stopImmediatePropagation(),a.setState({focus:t})},a.input_blur=function(e){e.nativeEvent.stopImmediatePropagation(),a.setState({focus:null})},a.headporId=function(e,t){A.a.emit("avatar",t)},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll((function(e,t){if(!e){var n={nickname:Object(w.t)(t.nickname),email:t.email,pwd_question:t.question,pwd_answer:t.answer};if(a.state.profile_id&&(n.profile_id=a.state.profile_id),a.state.show)return void d.a.error(a.t("boundmail"));a.props.login.info_login(n,(function(){var e=w.q.get("user"),t={name:e.name,pwd:e.pwd};a.props.login.login_in(t,(function(){a.props.history.push("/")}))}))}}))},a.handleCancel=function(){a.setState({visible:!1})},a.handleCreate=function(){var e=a.formRef.props.form;e.validateFields((function(t,n){t||(a.props.form.setFieldsValue({question:Object(w.t)(n.text)}),e.resetFields(),a.setState({visible:!1}))}))},a.saveFormRef=function(e){a.formRef=e},a.getAvatar=function(){return"".concat(Object(S.a)(),"/uf/s/").concat(a.state.profile_id,"/").concat(a.state.user_id)},a.addItem=function(){var e=a.props.form.getFieldValue("question")||"";a.setState({questionVal:e,visible:!0})},a.AnswerValidity=function(e,t,n){return t.length<2?n(a.props.t("answerValidity")):Object(w.s)(t)?n():void n(a.props.t("answerValidity"))},a.check_email=function(e){Object(S.b)("user_check_email",e.target.value).then((function(e){a.setState({show:!0})})).catch((function(e){2===e.state&&a.setState({show:!1})}))},a.nameRef=j.a.createRef(),a.emailRef=j.a.createRef(),a.answerRef=j.a.createRef(),a.customRef=j.a.createRef(),a.t=a.props.t,a.state={head_visible:!1,problemList:[{id:1,text:a.t("birthday")},{id:2,text:a.t("yourmind")},{id:3,text:a.t("favoriteperson")}],focus:null,profile_id:null,fiag:!1,visible:!1,user_id:null,show:!1,questionVal:""},a}return Object(E.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=w.q.get("user"),a=this.props.match.params.id;Number(a)===t.id?this.setState({user_id:a}):(w.q.remove("user"),this.props.history.push("/login")),this.avatar=A.a.on("avatar",(function(t){e.setState({profile_id:t})}))}},{key:"componentWillUnmount",value:function(){A.a.rm(this.avatar)}},{key:"change",value:function(e,t){e.stopPropagation();var a=this.state.problemList,n=a.findIndex((function(e){return e.id===t}));this.setState({custom:!1,checkId:t,problem:a[n].text,pro_visible:!1})}},{key:"render",value:function(){var e=this,t=this.props.t,a=this.props.form.getFieldDecorator,n=this.state,i=n.problemList,r=n.show,s=n.head_visible,o=n.profile_id,d=n.questionVal,h=r?{hasFeedback:!0,validateStatus:"error"}:{};return j.a.createElement("div",{className:"perfectinformation-content"},j.a.createElement(I.a,{title:t("PerfectInfo"),buyBtn:t("Buyingphotoframes")}),j.a.createElement("div",{className:"perfectinformation-inner"},j.a.createElement("div",{className:"perfectinformation-head"},j.a.createElement("h2",null,t("PerfectInfo"))),j.a.createElement("div",{className:"info_Avatar"},j.a.createElement("span",{className:"info_label"},t("HeadPortrait")),j.a.createElement("div",{className:"profile_picture",onClick:function(){e.setState({head_visible:!0})}},o?j.a.createElement("img",{alt:"profile",src:this.getAvatar()}):j.a.createElement(f.a,{size:56,icon:"user"}),j.a.createElement(p.a,{className:"right-rigth",type:"right"}))),j.a.createElement(y.a,{layout:"inline",onSubmit:this.handleSubmit},j.a.createElement(y.a.Item,{label:t("Nickname")},j.a.createElement(m.a,{placement:"topLeft",overlayClassName:"tooltip",trigger:"focus",title:t("regrule4")},a("nickname",{rules:[{required:!0,message:t("NicknameEmpty"),whitespace:!0},{pattern:w.m.nickname,message:t("nicknameValidity")}]})(j.a.createElement(u.a,{autoComplete:"off",size:"large",maxLength:50,placeholder:t("SetNickname")})))),j.a.createElement(y.a.Item,Object.assign({label:t("mailbox")},h),a("email",{rules:[{pattern:w.m.email,message:"The input is not valid E-mail!"},{required:!0,message:t("MailboxEmpty")}]})(j.a.createElement(u.a,{onBlur:this.check_email,autoComplete:"off",size:"large",placeholder:t("SetMailbox")}))),j.a.createElement(y.a.Item,{label:t("securityQuestion")},a("question",{rules:[{required:!0,message:t("selectQuestion")}]})(j.a.createElement(C.a,{size:"large",placeholder:t("selectQuestion"),dropdownRender:function(a){return j.a.createElement("div",null,a,j.a.createElement(l.a,{style:{margin:"4px 0"}}),j.a.createElement("div",{className:"custom-issue",style:{padding:"4px 8px",cursor:"pointer"},onMouseDown:function(e){return e.preventDefault()},onClick:e.addItem},j.a.createElement(p.a,{type:"plus"})," ",t("CustomQuestions")))}},i.map((function(e){return j.a.createElement(F,{key:e.id,value:e.text},e.text)}))))),j.a.createElement(y.a.Item,{label:t("Answer")},j.a.createElement(m.a,{placement:"topLeft",overlayClassName:"tooltip",trigger:"focus",title:t("regrule6")},a("answer",{rules:[{required:!0,message:t("enterAnswer"),whitespace:!0}]})(j.a.createElement(u.a,{size:"large",maxLength:50,placeholder:t("enterAnswer")})))),j.a.createElement(y.a.Item,null,j.a.createElement(c.a,{className:"confirm-btn",type:"primary",htmlType:"submit"},t("Determine")))),j.a.createElement("span",{className:"hint"},"ps:",t("required")),this.state.visible&&j.a.createElement(q,{wrappedComponentRef:this.saveFormRef,visible:this.state.visible,onCancel:this.handleCancel,onCreate:this.handleCreate,val:d})),s&&j.a.createElement(R.a,{callback:this.headporId,handleCancel:function(){e.setState({head_visible:!1})}}),j.a.createElement("div",{className:"l-top"}),j.a.createElement("div",{className:"l-bottom"}))}}]),t}(O.Component))||o)||o)||o)||o)||o);t.default=D}}]);
//# sourceMappingURL=5.b3be0d72.chunk.js.map