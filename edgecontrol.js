/**

	Copyright 2024 Asaf Yurdakul and Mert Software & Electronic A.Ş, Bursa Turkiye.

	Licensed under the GNU General Public License, Version 3.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

		https://www.gnu.org/licenses/gpl-3.0.html

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.

 **/
 
 module.exports = function(RED) {
    function edgeControlNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        /*
		var signalcount = 0;
		var prevValue = "0";
		
        node.on('input', function(msg) {
			
			if (msg.payload.hasOwnProperty("reset")) { 				
				if(msg.payload.reset == true) 
				{
					signalcount = 0;
					node.status({fill:"yellow", shape:"dot", text:`Count: ${signalcount}`});	
					node.send({ payload : signalcount });
					return;
				}
			} 

			if(msg.payload == "1" && prevValue == "0"){
				signalcount++;
			}
			prevValue = msg.payload;			
			
			node.status({fill:"green", shape:"dot", text:`Count: ${signalcount}`});	

			node.send({ payload : signalcount });

        });
		*/
    }
    RED.nodes.registerType("edge-control", edgeControlNode);
}

 