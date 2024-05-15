import ChatWidget from './ChatWidget';

const divWidget = document.querySelector('.chat-widget');
const chatWidget = new ChatWidget(divWidget);
chatWidget.init();
