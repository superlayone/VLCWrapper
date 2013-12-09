# VLC Plugin For Broswer #
Some rights reserved!**Layone** 2013!
#Project Details

 - For receiving video stream with RTSP
 - Plugin 
 - Test of usage

#Features

- RTSP
- VLC based decoding
- Decode the avi formatted H.264 video stream
- JS controlling
- Selection

#Dependency

- Stable VLC Release


#API

    // create a  player in div '#vlc'
    var player = VLCobject.embedPlayer('vlc', 800, 480, true);
    player.play('rtsp://Ur rtsp path');
    
    // set a [VLC option][2]
    player.options.set("start-time", 50); 
    // reset all VLC options
    player.options.clear(); 
    // start playing uri
    player.play(uri); 
    // stop playing
    player.stop(); 


# Definitions
It is a plugin based on vlc,soome rights reserved!

# Grant of Rights

- Make sure it's under permission! 
- **Dedicated** use only.

# Conditions and Limitations  #
- (A) **No Trademark License**.This license does not grant you rights to use any contributors' name, logo, or trademarks. 
- (B) If you bring a patent claim against any contributor over patents that you claim are infringed by the software, your patent license from such contributor to the software ends automatically. 
- (C) If you distribute any portion of the software, you must retain all copyright, patent, trademark, and attribution notices that are present in the software. 
- (D) If you distribute any portion of the software in source code form, you may do so only under this license by including a complete copy of this license with your distribution. If you distribute any portion of the software in compiled or object code form, you may only do so under a license that complies with this license. 
- (E) Layone hold the master version.
