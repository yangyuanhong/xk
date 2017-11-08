import axios from 'axios'
import Vue from 'vue'
Vue.use(axios)

export default {
  state:{
    students:[]
  },
  getters:{
    students:state=>state.students
  },
  mutations:{
    alterStudent(state,data){
      state.students = data;
    }
  },
  actions:{
    findAllStudent(context){
      axios.get('http://192.168.15.129:3000/student/findAll').then(({data})=>{
        context.commit('alterStudent',data);
      })
    },
    saveStudent(context,form){
      return new Promise(function(resolve,reject){
        axios.post('http://192.168.15.129:3000/student/save',form).then((result)=>{
          context.dispatch('findAllStudent')
          resolve(result);
        }).catch(function(error){
          reject(error);
        });
      })
    }
  }
}

