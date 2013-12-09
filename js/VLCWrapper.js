/*
<Author> = Layone
2013.12

Copyright (c) 2013, Layone
All rights reserved.

Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer. 
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution. 
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, 
THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER 
OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, 
PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES ; LOSS OF USE, DATA, OR PROFITS ; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, 
WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/
var VLCobject = {
                     VLC_PLUGIN:"VLC Multimedia Plug-in"
                    ,VLC_AX:"VideoLAN.VLCPlugin.2"
                    ,VLC_MIME_TYPE:"application/x-vlc-plugin"
                    ,doPlay:function(elementId ,rtspTag , uri) {
                    	/*
                    	if(this.ua()){
                    		alert("This is IE");
                    	}
                    	*/
                    	var vlc = document.getElementById(elementId);
						var uri_add_to_list = document.getElementById(rtspTag).value=uri;
						if(uri_add_to_list){
							var id = vlc.playlist.add(uri_add_to_list);
							vlc.playlist.playItem(id);
                    	}          
            		}
            		,ua:function() {
                        // browser detection  stuff
                        var u = navigator.userAgent;
                        if(u.indexOf("MSIE")>0){
                        	return true;
                        }
      					if (typeof window.ActiveXObject != 'undefined') {
      						try {
                                    var a = new ActiveXObject(this.VLC_AX);
                                    if (a) { // a will return null when ActiveX is disabled
                                    	alert("ActiveX is disabled,check again!")
                                    }
                                }
                                catch(e) {}
                        }
                    }
                    /*
                    For loop stuff
                    */
                    ,timer:function(){
                    	var t = setTimeout("statusCheck()",1000);
                    }
                    ,statusCheck:function(instance){

                    }

            	}