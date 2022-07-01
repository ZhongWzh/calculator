// index.js
Page({
  data:{
    num:'0',
    op:'',
    history:""
  },
  isClear:false,
  numBtn(e){
    var num=e.currentTarget.dataset.val
    if(this.data.num=='0'||this.isClear==true){
      this.setData({
        num:num
      })
      this.isClear=false
    }else{
      this.setData({
        num:this.data.num+num
      })
    }
  },
  result:null,
  opBtn(e){
    var op=this.data.op
    var num=Number(this.data.num)
    var op_new=e.target.dataset.val 
    this.setData({op:op_new})
    if(this.isClear){
      this.setData({history:this.data.history.substr(0,this.data.history.length-1)+op_new})
      return
    }
    this.setData({history:this.data.history+''+num+op_new})
    this.isClear=true
    if(this.result===null){
      this.result=num
      return
    }

    if(e.currentTarget.dataset.val=="="){
      this.setData({
        op:""
      })
    }else{
    this.setData({
      op:e.currentTarget.dataset.val
    })
  }
    // if(this.isClear==true){
    //   return
    // }
    // this.isClear=true
    // if(this.result==null){
    //   this.result=num
    //   return
    // }
    if(op==="+"){
      this.result=this.result+num
    }else if(op==="-"){
      this.result=this.result-num
    }else if(op==="*"){
      this.result=this.result*num
    }else if(op==="/"){
      this.result=this.result/num
    }else if(op==="%"){
      this.result=this.result%num
    }else if(op==="="){
      this.result=num
      this.setData({history:num+op_new})
    }
    this.setData({num:this.result})
    if(e.currentTarget.dataset.val=='='){
      this.result=null
   // this.history=null
    }else{
      
    }
  },
  dotBtn(e){
    if(this.isClear){
      this.setData({num:'0.'})
      this.isClear=false
      return
    }
    if(this.data.num.indexOf('.')>=0){
      return
    }
    this.setData({num:this.data.num+'.'})
  },
  delBtn(e){
    var num=this.data.num.substr(0,this.data.num.length-1)
    this.setData({num:num==='' ? '0' :num})
  },
  resetBtn(e){
    this.result=null
    this.history=null
    this.isClear=false
    this.setData({num:'0', op:'',history:''})
  },
})
