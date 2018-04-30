/*************************
LAZY IMAGE LOADER :)
****************************/
export default class lazyLoad{
	constructor(item){
		//get the size of the window
		const windowSize = document.documentElement.clientWidth;
		//set the imgSize based on width of window
		let itemSize = "_mobile";

		if( windowSize > 1440){
			itemSize = "_l";
		} else if ( windowSize > 960){
		    itemSize = "_m";
		} else if ( windowSize > 600){
		    itemSize = "_s";
		}

		 this.filePath = item.path + item.name + itemSize + item.type;
		 this.elementID = item.elemID;
		 this.hideOn = item.hideOn;
	}

	loadImg(){
			if(this.hideOn !== null) {
				this.hideOn = this.hideOn.split('');
				let operator = this.hideOn.pop();
				this.hideOn = this.hideOn.join('');

				if(operator === '+' && this.hideOn > document.documentElement.clientWidth){
					//sets thee items background image to "loadThis"
					document.getElementById(this.elementID).setAttribute('src', this.filePath);
					}
				if(operator === '-' && this.hideOn < document.documentElement.clientWidth){
					document.getElementById(this.elementID).setAttribute('src', this.filePath);
				}
			}
			else{
				document.getElementById(this.elementID).setAttribute('src', this.filePath);
			}
		}

		loadBg(){
				if(this.hideOn !== null) {
					this.hideOn = this.hideOn.split('');
					let operator = this.hideOn.pop();
					this.hideOn = this.hideOn.join('');

					if(operator === '+' && this.hideOn > document.documentElement.clientWidth){
						//sets thee items background image to "loadThis"
						document.getElementById(this.elementID).style.backgroundImage = 'url(' + this.filePath + ')';
						}
					if(operator === '-' && this.hideOn < document.documentElement.clientWidth){
						document.getElementById(this.elementID).style.backgroundImage = 'url(' + this.filePath + ')';
					}
				}
				else{
					document.getElementById(this.elementID).style.backgroundImage = 'url(' + this.filePath + ')';
				}
			}



	}
