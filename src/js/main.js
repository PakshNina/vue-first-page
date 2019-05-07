function random(min, max) {

    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

function limit(x, min, max) {
    return x < min ? min : (x > max ? max : x);
  }

var SIZE_CONST = 100;

var ani = new Vue({
    el: "#ani",
    data: {
        rows: 0,
        columns: 0,
        list: [],
        logo: 'NINUCIUM',
        letter: [],
        boxStyle: '',
        fontStyle: '',
        size: SIZE_CONST,
        window: {
            width: 0,
            height: 0
        }
    },


    mounted(){
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
       
    },

    methods: {
        handleResize() {

            this.list = [];
            this.letter = [];

            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;

            this.size = SIZE_CONST;
            this.rows = Math.round(this.window.height/this.size);
            this.columns = Math.round(this.window.width/this.size);

  
            if  (this.columns < this.logo.length) {
                this.columns = this.logo.length;
                this.size = Math.round(this.window.width/this.logo.length);
                this.rows = Math.ceil(this.window.height/this.size);
            }

            this.boxStyle = 'width: ' + this.size + 'px; height: ' + this.size + 'px; ';
            this.fontStyle = 'font-size: ' + (this.size - 10) +'px; line-height: ' + this.size + 'px; '
            
            
            for (var j = 0; j < this.rows; j++){
                var row = []
                this.letter.push([]);

                for (var i = 0; i < this.columns; i++) {
                    var hex = 'background-color: #' + 111111*random(3,9) + ';'
                    var timer = "animation-duration: " + 1 * random(1,20) + 's;'; 
                    
                    row.push(this.boxStyle + hex + timer);
                    this.letter[j].push('');
                }
    
                this.list.push(row);
            }

            var letterStart = Math.ceil((this.columns - this.logo.length)/2);

            for (var i = 0; i <= (letterStart + this.logo.length); i++){
                this.letter[0][i + letterStart] = this.logo[i];
            }

        }
    },

        
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    }
});
