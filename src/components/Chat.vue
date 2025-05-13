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
  import { auth, db } from '../firebase';
  import {
    collection, addDoc, onSnapshot, deleteDoc, updateDoc, doc, serverTimestamp, query, orderBy
  } from 'firebase/firestore';
  
  export default {
    data() {
      return {
        messages: [],
        newMsg: '',
        editId: null,
        editText: '',
        currentUser: auth.currentUser?.email?.split('@')[0] || ''
      };
    },
    methods: {
      
      formatTime(ts) {
      const date = ts?.seconds ? new Date(ts.seconds * 1000) : null;
      return date ? date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';
      },
      formatDate(ts) {
      const date = ts?.seconds ? new Date(ts.seconds * 1000) : null;
      return date ? date.toLocaleDateString() : '';
      },
      groupByDate(messages) {
      const grouped = {};
      for (const msg of messages) {
      const date = this.formatDate(msg.createdAt);
      if (!grouped[date]) grouped[date] = [];
      grouped[date].push(msg);
     }
    return grouped;
      },
      async sendMessage() {
        if (!this.newMsg) return;
        await addDoc(collection(db, 'messages'), {
          user: this.currentUser,
          content: this.newMsg,
          createdAt: serverTimestamp()
        });
        this.newMsg = '';
      },
      startEdit(msg) {
        this.editId = msg.id;
        this.editText = msg.content;
      },
      async saveEdit(id) {
        if (!this.editText) return;
        const docRef = doc(db, 'messages', id);
        await updateDoc(docRef, { content: this.editText });
        this.editId = null;
        this.editText = '';
      },
      async deleteMessage(id) {
        const docRef = doc(db, 'messages', id);
        await deleteDoc(docRef);
      }
    },
    created() {
         const q = query(collection(db, 'messages'), orderBy('createdAt'));
         onSnapshot(q, (snap) => {
         this.messages = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
         });
         this.currentUser = auth.currentUser?.email?.split('@')[0];
    },
    computed: {
        groupedMessages() {
        return this.groupByDate(this.messages);
        }
    }
};
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

@media screen and (max-width: 745px) {
    .message .own{
        min-width: 35%;
    }
}

</style>