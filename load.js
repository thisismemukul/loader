const square = document.querySelector('.square');
const main = document.querySelector('.main');

function int() {
	setTimeout(()=>{
	  square.load.opacity=0;
	  square.load.display='none';

	  main.style.display='block';
	  setTimeout(() =>(main.style.opacity=1),50);

	},4000);
	// body...
}
