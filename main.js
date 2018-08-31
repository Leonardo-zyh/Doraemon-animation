var duration = 0
function code(code, fn,duration){
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    let id =setTimeout(function runCode() {
        n+=1
        container.innerHTML =Prism.highlight( code.substring(0, n), Prism.languages.css)//prefix +
        styleTag.innerHTML = code.substring(0,n)
        container.scrollTop = container.scrollHeight
        if(n < code.length){
            id = setTimeout(runCode,duration)  //持续时间后递归
        }else{
          fn && fn.call()
        }
    },duration)
}

    let Doraemon = ` 

  #outer-line {
    width: 780px;
    height: 800px;
    background: rgb(021,158,255);
    border-radius: 50% 50% 50% 50%/50% 50% 60% 60%;
    box-shadow: 0 0 4px 8px rgba(0, 0, 0, 1);
    text-align: center;
    } 
  #inner-line {
    width: 700px;
    height: 700px;
    background: white;
    border-radius: 50% 50% 50% 50%/50% 50% 60% 60%;
    border: 6px solid black;
    display: inline-block;
    margin-top: 90px;
     }  
  #eyebox {
    width: 700px;
    height: 250px;
    border: 8px solid transparent;
    margin: 0 auto;
    box-sizing: border-box;
    margin-top: -90px;
  }  
  #eye-left {
    width: 150px;
    height: 150px;
    background:white;
    border: 6px solid black;
    border-radius: 50% 50% 50% 50%/50% 50% 50% 50%;
    float: left;
    margin-left: 180px;
    }
  #eye-right {
    width: 150px;
    height: 150px;
    background:white;
    border: 6px solid black;
    border-radius: 50% 50% 50% 50%/50% 50% 50% 50%;
    float: right;
    margin-right: 180px;    
  } 
  .iris {
    width: 45px;
    height: 43px;
    border: 8px solid black;
    border-radius: 50%  50% 0 0/50px 50px 0 0 ;
    margin: 0 auto;
    margin-top: 30%;
    border-bottom: white;   
  } 
  #iris-left {
    margin-left: 50%;
  }
  #iris-right {
    margin-right: 50%;
  }  
  #nose {
    width: 100px;
    height: 100px;
    background: red;
    border: 4px solid black;
    border-radius: 50%;
    margin: 0 auto;
    margin-top: -110px;
  }  
  #nose-highlight{
    width: 35px;
    height: 35px;
    background: white;
    border-radius: 50%;
    margin: 15px 0 0 15px;
  }    
  #mouth {
    width: 630px;
    height: 440px;
    background: red;
    margin: 10px auto 0 auto;
    border: 5px solid black;
    border-radius: 0 0 50% 50%/0 0 100% 100%;    
  }
  #lipbox {
    width: 708px;
    height: 180px;
    margin: -15px 0 0 -39px;
  }
  .lips{
    width: 446px;
    height: 100px;
    background: white;
    border: 4px solid black;    
  }
  #lip-left {
    float:left;
    border-radius: 0% 0% 100% 30%/0%  0% 100% 100%;
    border-top: transparent;
  }
  #lip-right {
    float: left;
    border-radius: 0% 0% 25% 100%/0%  0% 100% 100%;
    border-top:transparent;
    margin-left: -200px
  }
  .neko {
    width: 100px;
    height: 46px;
    background: white;
    border: 4px solid black;
    margin-top: -153px;
  } 
  #neko-left {
    float:left;
    border-radius: 70% 50% 0% 0%/120% 100% 0 0;
    border-bottom: transparent;
  }
  #neko-right{
    float: right;
     border-radius: 50% 70% 0% 0%/100% 120% 0 0;  border-bottom: transparent;
  }
  .adjust {
    width: 260px;
    height: 50px;
    background: white;
    margin-top: -108px;  
  }
  #mouth-adjust-left{
    float: left;
    margin-left: 15px;
  }
  #mouth-adjust-center {
    width: 170px;
    height: 76px;
    background: white;
    order: 4px solid black;
    margin-top: -103px;
    margin-left: 273px;
    float: left;
  }  
  #mouth-adjust-right {
    float: right;
    margin-right: 15px;
  }
  #center-line {
    width: 0px;
    height: 73px;
    background: black;
    border: 3px solid black;
    border-radius: 50%;
    margin: 0 auto;
  }
  .tongue {
    width: 152px;
    height: 58px;
    background: rgb(255,110,55);
    border: 4px solid black;
     float: left;
    margin-left: 167px;
    border-bottom: rgb(255,110,55);
    margin-top: 60px;
    margin-bottom: 0;
  }
  #tongue .tongue:nth-child(2){
    margin-left: -20px;
  }
  
  #tongue-left {
  border-radius: 75% 85% 0 0 / 120% 120% 0 0;
   
  }
  #tongue-right {
  border-radius: 75% 85% 0 0 / 120% 120% 0 0;
    
  }
  
  #tongue-low {
    width: 292px;
    height: 152px;
    background: rgb(255,110,55);
    border: 4px solid black;
    margin-left: 167px;
    float: left;
    border-top:  rgb(255,110,55);
    border-radius: 0 0 50% 50% / 0 0 100% 100%;
    position: relative;
    top:-3px  
  }
  #tongue-low:after {
    content: "";
    background:rgb(255,110,55);
    border: 35px solid rgb(255,110,55);
  }
  #neckless {
    width: 550px;
    height: 50px;
    background: red;
    border: 8px solid black;
    margin-left: auto;
    margin-right: auto;
    margin-top: 18px;
    border-radius: 40px;
      }
  #bellbox {
    width: 80px;
    height: 80px;
    background: yellow;
    border: 4px solid black;
    border-radius: 50%;
    margin: 0 auto;
    margin-top:  -46px;
    box-shadow: 0 2px 0 black;
  } 
  #bellfuchi {
    width: 80px;
    height: 5px;
    background: yellow;
    border: 4px solid black;
    border-radius: 40px;
    margin-left: -4px;
    margin-top: 16px;
    } 
  #hole {
    width: 20px;
    height: 20px;
    background: grey;
    border: 4px solid black;
    border-radius: 50%;
    margin: 0 auto;
  } 
  #hole-line {
    width: 0px;
    height: 20px;
    border: 2px solid black;
    margin: 0 auto;
  }  
  #higebox {
    width: 100%;
    height: 130px;
    float: left;
    margin-top: -150px;
    box-sizing: border-box;    
    } 
  .hige {
    width: 200px;
    height: 0;
    border: 2px solid black;
    border-radius: 50%;
    float: left;
    margin: 0 0 0 102.66px;
    margin-top: 30px;
    box-sizing: border-box
  } 
  .higeleft {
    transform-origin: top right;
  }
  .higeright {
    transform-origin: top left;
  }  
  #left-top {
    transform: rotate(15deg)
  }
  #left-bottom {
    transform: rotate(-8deg)
  }
  #right-top {
    transform: rotate(-15deg)
  }
  #right-bottom {
    transform: rotate(8deg)
  }
  `
code(Doraemon,'',duration)
