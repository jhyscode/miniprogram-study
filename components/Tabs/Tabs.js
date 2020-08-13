// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // aaa:{
    //   type:String,
    //   value:""
    // }
    tabs:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
 
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemTap(e){
     const {index} = e.currentTarget.dataset;

      this.triggerEvent("itemChange",{index});
     //拷贝数组
     //let tabs = JSON.parse(JSON.stringify(this.data.tabs));

     let {tabs} = this.data;

     tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);

     this.setData({
       tabs
     })
    
    }
  }
})
