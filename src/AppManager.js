/*----------------------------------------*\
  256^3 - AppManager.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2020-02-06 23:01:04
  @Last Modified time: 2020-02-06 23:23:01
\*----------------------------------------*/

class AppManager {
	static levelComplete(){
		top.postMessage('SUCCESS', '*');
		console.log('SUCCESS');
	}

	static ready(action=()=>{}){
		AppManager.listeners.DOMContentLoaded.push(action);
	}

	static trigDOMContentLoaded(){
		document.addEventListener("mousemove", AppManager.handleMouseMove);
		for(let action of AppManager.listeners.DOMContentLoaded){
			action();
		}
	}
}

AppManager.listeners = {
	DOMContentLoaded : []
};

document.addEventListener("DOMContentLoaded", AppManager.trigDOMContentLoaded);

export default AppManager;