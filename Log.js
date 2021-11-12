AFRAME.registerComponent("log",{
    schema:{
        message:{type:"string",default:"hello Said(amirhon)"}
    },
    init:function(){
        console.log(this.data.message)
    }
}) 