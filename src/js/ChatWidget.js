export default class ChatWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.head = document.querySelector('head');
  }

  init() {
    this.parentEl.innerHTML = this.constructor.markup;
    this.head.insertAdjacentHTML('beforeend', this.constructor.styles);

    this.circle = document.querySelector('.chat-widget-circle');
    this.chat = document.querySelector('.chat-widget-modal');
    this.closeChatBtn = document.querySelector('.chat-widget-modal-close-btn');

    this.events();
  }

  events() {
    this.circle.addEventListener('click', () => this.toggleClass());
    this.closeChatBtn.addEventListener('click', () => this.toggleClass());
  }

  toggleClass() {
    this.circle.classList.toggle('chat-widget-hide');
    this.chat.classList.toggle('chat-widget-hide');
  }

  static get markup() {
    return `
            <div class="chat-widget-circle chat-widget-animation"></div>
            <div class="chat-widget-modal chat-widget-animation chat-widget-hide">
                <div class="chat-widget-modal-header">
                    <h5 class="chat-widget-modal-title">Напишите нам</h5>
                    <button class="chat-widget-modal-close-btn" type="button"><sup>x</sup></button>
                </div>
                <div class="chat-widget-modal-body">
                    <form class="chat-widget-modal-form">
                        <textarea class="chat-widget-modal-form-textarea" name="message" id="message" cols="30" rows="10"></textarea>
                        <button class="chat-widget-modal-form-btn-submit" type="submit">Отправить</button>
                    </form>
                </div>
            </div>            
        `;
  }

  static get styles() {
    return `
            <style>
                .chat-widget-circle {
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    margin-right: 45px;
                    margin-bottom: 45px;
                    width: 50px; 
                    height: 50px;
                    background: red;
                    border-radius: 50%;
                    z-index: 500;
                    cursor: pointer;
                }
                
                .chat-widget-circle:hover {
                    transform: scale(1.2);
                }
                
                .chat-widget-animation {
                    transition: all linear 100ms;
                }
                
                .chat-widget-hide {
                    opacity: 0;
                    visibility: hidden;
                }
                
                .chat-widget-modal {
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    margin-right: 45px;
                    margin-bottom: 45px;
                    z-index: 1000;
                    display: inline-block;
                    border: 1px solid #dee2e6;
                    border-radius: 6px;
                    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                    background-color: #fff;
                }
                
                .chat-widget-modal-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 15px 15px 0;
                }
                
                .chat-widget-modal-title {
                    font-family: Arial, Helvetica, sans-serif;
                    font-size: 20px;
                    margin: 0;
                }
                
                .chat-widget-modal-close-btn {
                    background: unset;
                    border: 0;
                    font-size: 20px;
                    cursor: pointer;
                    padding: 5px;
                    color: grey;
                }
                
                .chat-widget-modal-close-btn:hover {
                    color: #000;
                }
                
                .chat-widget-modal-body {
                    padding: 15px;
                }
                
                .chat-widget-modal-form {
                    display: flex;
                    flex-direction: column;
                }
                
                .chat-widget-modal-form-textarea {
                    outline: 0;
                }
                
                .chat-widget-modal-form-btn-submit {
                    margin-top: 10px;
                    color: #fff;
                    background-color: #0d6efd;
                    padding: 6px 12px;
                    border: 1px solid #0d6efd;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 16px;
                }
                
                .chat-widget-modal-form-btn-submit:hover {
                    background-color: #0b5ed7;
                    border: 1px solid #0b5ed7;
                }
                
                
                .square{
                    width: 60px;
                    height: 60px;
                    background: #3fc878;
                    position: absolute;
                    left: 0;
                }       
            </style>        
        `;
  }
}
