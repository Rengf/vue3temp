
// import {  } from "@/components" // 组件
import {reqRegist} from "@/api/index"
export default {
    name: 'Regist',
    data() {
        return {
            username: '',
            password: '',
            repassword:'',
            warning:''
        }
    },
    created() {
       console.log(reqRegist)
    },
    methods: {
        async regist() {
            if (this.username == "") {
                this.warning = "电话号码不能为空";
                return;
            }else if (this.password == "") {
                this.warning = "密码不能为空";
                return;
            }else if (this.password != this.repassword) {
                this.warning = "两次输入的密码不一致";
                return;
            }
            var data={
              username: this.username,
              password: this.password,
            };

            var result=await reqRegist(data);
            console.log(result)
        }
    },
    components:{
        
    }
   
};
