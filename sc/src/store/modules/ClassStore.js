import axios from 'axios'

export default {
  state:{
    classes:[]
  },
  getters:{
    classes:state=>state.classes
  },
  mutations:{
    alterClasses(state,data){
      state.classes = data;
    }
  },
  actions:{
    findAllClasses(context){
      axios.get('http://192.168.15.129:3000/clazz/findAll').then(({data})=>{
        context.commit('alterClasses',data);
      })
    }
  }
}
