<template>
	<div class="content" :class="fon">
		<article class="contein">
			<div class="block">
				<section class="block__item block-item foto1 color_but">
					<h2>У вас есть аккаунт?</h2>
					<button type="button" @click="Reg" class="btn btn-dark">Войти</button>
				</section>
				<section class="block__item block-item foto2 color_but2">
					<h2>У вас нет аккаунта?</h2>
					<button type="button" @click="Auth" class="btn btn-dark">Регистрация</button>
				</section>
			</div>
			
			<div class="form-box" :class="location_obj">
				<div class="left_form">
					<p>Авторизация</p>
					<input type="text" name="log" placeholder="Логин" v-model="logForm.email">
					<input type="password" name="pass" placeholder="Пароль" v-model="logForm.password">
					<button @click='signIn'>Войти</button>
				</div>
				
				<div class="right_form">
					<p>Регистрация</p>
					<input type="text" name="name" placeholder="Имя" v-model="regForm.name">
					<input type="text" name="log" placeholder="Логин" v-model="regForm.email">
					<input type="password" name="pass" placeholder="Пароль" v-model="regForm.password">
					<input type="password" name="second_pass" placeholder="Повторите пароль" v-model="regForm.repeatPassword">
					<button @click='signUp'>Регистрация</button>
				</div>
			</div>
		</article>
	</div>
</template>

<script setup>
    import { ref, watch } from 'vue';
	import { useStore } from "vuex";
	import { useRouter } from 'vue-router';

	const store = useStore();
	const router = useRouter();
    
    const regForm = ref({
        name: '',
        email: '',
        password: '',
        repeatPassword: ''
    })

	const logForm = ref({
		email: '',
        password: ''
	})

    let location_obj = ref('no_activ')
    let fon = ref('fon1')
	let isSignUp = ref(false)

    const Auth = () => {
        location_obj.value = 'activ'
        fon.value = 'fon2'
		isSignUp.value = true
    }

    const Reg = () => {
        location_obj.value = 'no_activ'
        fon.value = 'fon1'
		isSignUp.value = false
    }

	const signIn = () => {
		store.dispatch("logIn", logForm.value);
	}

	const signUp = () => {
		store.dispatch('registration', regForm.value)
	}

	// console.log(store.state.error)
	watch(() => store.state.error, (error) => {
		if(error === false) {
			if(!isSignUp.value)
			router.push('/');
			else
			router.go();
		}
	})

</script>

<style scoped>
    body{
	padding: 0px;
	margin: 0px;
	width: 100vw;
	height: 100vh;
	overflow-x:  hidden;
}

.content{
	width: 100%;
	height: 100%;
	padding-top: 50px;
	padding-bottom: 50px;
	/* background-image: url(image/2.jpg); */
	background-color: white;
	background-attachment: fixed;
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.9s;
}


.contein{
	width: 800px;
	height: 500px;
	/* background-color: #050414; */
	padding-top: 40px;
	padding-bottom: 40px;
	position: relative;
}

.block{
	height: 100%;
	background-color: white;
	box-shadow: 0 5px 45px rgba(0, 0, 0, 0.4);
	display: flex;
	align-items: center;
}

.block-item{
	text-align: center;
}

.block__item{
	width: 50%;
	/* background-image: src(image/3.jpg); */
}

.block{
	
}

.block img{
	width: 50%;
}

.form-box{
	width: 50%;
	height: 100%;
	background-color: #191919;
	box-shadow: 0 5px 45px rgba(0, 0, 0, 0.25);
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1000;
	
	transition: 0.8s;
	overflow: hidden;
}

.activ{
	left: 50%;
	background-color: #0b061d;
}

.no_activ{
	right: 50%;
}

.form-box.activ .left_form{
	left: -200%;
	transition-delay: 0s;
}

.form-box.activ .right_form{
	left: 0;
	transition-delay: 0s;
}

.left_form{
	left: 0;
	transition-delay: 0s;
}

.right_form{
	left: 200%;
	transition-delay: 0s;
}

.form-box .left_form{
	width: 100%;
	height: 100%;
	display: flex;
	padding-top: 20px;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	position: absolute;
	transition: 0.8s;
}

.form-box .right_form{
	width: 100%;
	height: 100%;
	display: flex;
	padding-top: 20px;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	position: absolute;
	transition: 0.8s;
}

.form-box p{
	color: white;
	font-size: 28px;
	font-weight: bold;
}

.form-box input, button{
	width: 300px;
	height: 50px;
	margin-bottom: 10px;
}

.form-box button{
	height: 50px;
}

.block__item h2{
	
}

section.foto1{
	height: 100%;
	background-image: url("../../public/assets/auth/9.jpeg");
    background-size: cover;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
}

section.foto2{
	height: 100%;
	background-image: url("../../public/assets/auth/11.jpg");
    background-size: cover;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
}

.fon1{
	background-color: #e8552a;
	height: calc(100vh - 70px);
}

.fon2{
	background-color: #333c83;
	height: calc(100vh - 70px);
}

.right_form button{
    background: #333c83;
    color: white;
    border: 0px;
    border-radius: 0px;
	font-size: 20px;
	font-weight: bold;
}

.left_form button{
    background: #ef5f3a;
    color: white;
    border: 0px;
    border-radius: 0px;
	font-size: 20px;
	font-weight: bold;
}

.block__item button[type=button]{
	height: 50px;
	border: 0px;
    border-radius: 0px;
	font-size: 20px;
	font-weight: bold;
	color: white;
}

.color_but button[type=button]{
	background-color: #0b061d;
}

.color_but2 button[type=button]{
	background-color: #191919;
}

.color_but h2{
	color: white;
}

.color_but2 h2{
	color: #231717;
}

.uved p{
	color: red;
	font-size: 24px;
	background-color: black;
}

input{
	color: black;
	outline: none;
	background-color: white;
	padding: 0px 5px 0px 5px;
}

</style>