// pages/home/home.js
Page({

  data: {
      name:'yuhc',
      students:[
        {name:'s1',age:21},
        {name:'s2',age:22}
      ],
      count:0
  },
  handleBtnClick(){
    this.setData({
      count:this.data.count+=1
    })
    console.log(this.data.count); 
  }
})