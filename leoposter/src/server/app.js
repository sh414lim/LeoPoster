const express =require('express');
const cookieParser=require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');
const passport = require('passport');

dotenv.confing();
const loginPage=require('../Pages/login/loginUI')


const app = express();
app.set('port',process.PORT || 3002); 

app.use(morgan('dev'));//요청과 응답을 기록하는 라우터가 morgan
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:process.env.COOKIE_SECRET,
    cookie:{
        httpOnly:true,
        secure:false,
    }
}));

app.use('/login', loginPage); //page 라우터 연결

app.use((req,res,next)=>{//모든 라우터 뒤에나오는 404 처리 미들웨어
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다`);
    next(error)
})

app.use((err,req,res,next)=>{ //에러 미들웨어 인자가 4개 next 생략 x
    res.locals.message=err.message; //템플릿 엔진 변수
    res.locals.error=process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error')
})

app.listen(app.get('port'),()=>{
console.log(app.get('port'),'빈포트에서 대기중')
})