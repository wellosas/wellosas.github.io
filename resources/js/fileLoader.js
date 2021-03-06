define(() => {
    return {
        ajax: function(url) {
            return new Promise((resolve, reject) => {
                var xhr = new XMLHttpRequest();

                xhr.open('GET', url, true);
                xhr.onload = function() {
                    if(xhr.status == 200){
                        resolve(xhr.response);
                    }else{
                        reject(Error(xhr.statusText));
                    }
                };                

                xhr.onerror = function() {
                    reject(Error('Network Error'));
                }

                xhr.send();

            });
        }
    }
});