<template>
      <div class="chat">
        <h2>Chat</h2>   
          <div class="date-header">12.02.2025</div>
          <div class="message-wrapper">
            <div class="message">
              <div class="message-header" >
                <button  class="btnedit">
                  <img class="iconedit" src="../assets/icons/pencil.svg" />
                </button>
                <button class="btndelete">
                  <img class="icondelete" src="../assets/icons/trash.svg" />
                </button>
              </div>
              <div class="message-body">
                <span class="date">12:36</span>
                <div>message text 232 jhfe</div>
                <!-- <input class="edit-input"/> -->
              </div>
            </div>
          </div>

        <div class="input-container">
          <input class="input-message"/>
          <button class="send-button">
            <img class="sendicon" src="../assets/icons/message-circle-svgrepo-com.svg" />
          </button>
        </div>
      </div>
    </template>
  
<script>
  
</script>
  
<style>
.chat {
  background-color: rgba(41, 47, 63, 1);
  max-width: 100%; 
  /* width: 100%; */
  height: 100%;
  padding-bottom: 80px; 
}

h2 {
  color: white;
  text-align: center;
}

.message-wrapper {
  display: flex;
  margin: 10px 15%;
}

.own-wrapper {
  justify-content: flex-end;
}

.other-wrapper {
  justify-content: flex-start;
}

.message {
  position: relative;
  max-width: 40%;
  min-width: 15%;
  word-wrap: break-word;
  overflow-wrap: break-word;
  padding: 10px;
  border-radius: 20px;
  color: white;
  background-color: rgba(55, 62, 78, 1);

}

.message-header {
  position: absolute;
  top: 5px;
  right: 10px;
  display: flex;
  gap: 5px;
    background-color: rgba(55, 62, 78, 1);

}

.message-body {
   padding-top: 0px; /*20px */
     background-color: rgba(55, 62, 78, 1);

}

.date {
  font-size: 0.8em;
  color: gray;
  display: block;
  margin-bottom: 5px;
    background-color: rgba(55, 62, 78, 1);

}

.date-header {
  text-align: center;
  color: white;
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 0.9em;
}

.input-container {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  background-color: rgba(41, 47, 63, 1);
  z-index: 10;
}

.input-message {
  background-color: rgba(0, 0, 0, 0.25);
  color: white;
  height: 40px;
  width: 540px;
  border-radius: 10px;
  border: none;
  outline: none;
  padding: 0 10px;
  font-size: 1em;
}

.send-button {
  position: relative;
  right:20px;
  height: 40px;
  width: 40px;
  border-radius: 10px;
  cursor: pointer;
  background-color: rgba(55, 62, 78, 1);
  border: none;
}

.sendicon {
  width: 70%;
  color: rgba(255, 255, 255, 0.55);
  background-color: rgba(55, 62, 78, 1);
}

.btndelete,
.btnedit {
  width: 20px;
  height: 20px;
  position: relative;
  right:80%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
    background-color: rgba(55, 62, 78, 1);

}

.icondelete {
  width: 100%;
  height: 100%;
  background-color: transparent;
}

</style>