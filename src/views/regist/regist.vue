<template>
    <div class="warp">
            <div class="regist">
                <div class="loginAdvertising">
                </div>
                <div class="registFrme">
                    <div class="registHeader">
                        <span>注册</span>
                    </div>
                    <div class="registBody">
                        <div class="registErrorMessage">
                            <p>{{warning}}</p>
                        </div>
                        <div class="registForm">
                                <div class="tel inputBox">
                                    <label for="user" class="userTelLable"><span>电话：</span></label>
                                    <input type="text" class="userTel" placeholder="请输入电话号码" v-model="username">
                                </div>
                                <!-- <div class="email inputBox">
                                    <label for="user" class="userEmailLable"><span>邮箱：</span></label>
                                    <input type="text" class="userEmail" placeholder="请输入邮箱地址" v-model="useremail">
                                </div> -->
                                <div class="registPassword inputBox">
                                    <label for="password" class="userPasswordLable"><span>密码：</span></label>
                                    <input type="password" class="passwordRegistInput" placeholder="请输入密码" v-model="password">
                                </div>
                                <div class="repassword inputBox">
                                    <label for="repassword" class="userPasswordLable"><span>密码：</span></label>
                                    <input type="password" class="repasswordRegistInput" placeholder="请再次输入密码" v-model="repassword">
                                </div>
                                <div class="forget">
                                    <p>已经拥有账户，去<router-link style="padding: 0 5px" :to="{path:'/login'}">登录</router-link>！</p>
                                </div>
                        </div>
                    </div>
                    <div class="loginFooter">
                        <div class="submit">
                            <input type="submit" value="注  册" @click="regist">
                        </div>
                    </div>
                </div>
         </div>
    </div>
</template>

<script src="./regist.js"></script>

<style lang="scss">
  @import './regist.scss';
</style>

