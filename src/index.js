const appState = {
	title: {
		text: 'React.js 小书',
		color: 'red',
	},
	content: {
		text: 'React.js 小书内容',
    color: 'blue'
	}
}

function renderApp(appState) {
	renderTitle(appState.title);
	renderContent(appState.content);
}

function renderTitle(title) {
	const titleDOM = document.getElementById('title')
  titleDOM.innerHTML = title.text
  titleDOM.style.color = title.color
}

function renderContent(content) {
	const contentDOM = document.getElementById('content')
  contentDOM.innerHTML = content.text
  contentDOM.style.color = content.color
}

function dispatch (action) {
	switch (action.type) {
		case 'UPDATE_TITLE_TEXT':
			appState.title.text = action.text;
			break;
		case 'UPDATE_TITTLE_COLOR':
			appState.title.color = action.color;
			break;
		default:
			break;
	}
}

renderApp(appState);

dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《红楼梦》'}); // 修改标题文本
dispatch({ type: 'UPDATE_TITTLE_COLOR', color: 'pink'}); // 修改标题颜色

renderApp(appState);