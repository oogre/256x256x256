/*----------------------------------------*\
  256x256x256 - Square.js
  @author Evrard Vincent (vincent@ogre.be)
  @Date:   2018-02-16 11:02:59
  @Last Modified time: 2018-02-26 18:58:36
\*----------------------------------------*/

class Square extends MouseInteractive{
	constructor(x, y, w, h){
		super ();
		this.x = x;
		this.y = y;
		this.w = w;
		this.half_w = this.w / 2;
		this.h = h;
		this.half_h = this.h / 2;
		this.color = color(255, 255, 255);
	}
	
	isHover(cursorX, cursorY){
		return  cursorY > this.y - this.half_h && 
				cursorY < this.y + this.half_h && 
				cursorX > this.x - this.half_w && 
				cursorX < this.x + this.half_w ;
	}
	draw(){
		noStroke();
		fill(this.color);
		rect(this.x, this.y, this.w, this.h);
		textSize(9);
		text('follow me',109.5,30);
	}
	
}