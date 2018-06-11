var storage =  {
	_get: function( key ){
		return localStorage.getItem( key );
	},
	_set: function( key, value){
		localStorage.setItem(key, value );
	},
	getUser: function( ){
		return this._get('user');		
	},
	setUser: function(value){
		this._set('user', value);
	}
}

export default storage;