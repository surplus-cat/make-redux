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

function createStore (state, stateChanger) {
	const listeners = [];
	const subscribe = (listener) => listeners.push(listener);
	const getState = () => state;
	const dispatch = (action) => {
		stateChanger(state, action);
		// 用一种通用的方式“监听”数据变化，然后重新渲染页面，这里要用到观察者模式
		listeners.forEach((listener) => listener());
	}
	return { getState, dispatch, subscribe };
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

function stateChanger (state, action) {
	switch (action.type) {
		case 'UPDATE_TITLE_TEXT':
			state.title.text = action.text;
			break;
		case 'UPDATE_TITTLE_COLOR':
			state.title.color = action.color;
			break;
		default:
			break;
	}
}

const store = createStore(appState, stateChanger);
store.subscribe(() => renderApp(store.getState())); // 监听数据变化

renderApp(appState); // 首次渲染页面

store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《红楼梦》'}); // 修改标题文本
store.dispatch({ type: 'UPDATE_TITTLE_COLOR', color: 'pink'}); // 修改标题颜色

// ...后面不管如何 store.dispatch，都不需要重新调用 renderApp
// renderApp(appState); // 把新的数据渲染到页面上