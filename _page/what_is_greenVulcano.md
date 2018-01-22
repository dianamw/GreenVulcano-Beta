   ---
   layout: default_page
   title: About
   permalink: /pages/
   ---

# Enqueue
<div data-aos="fade-left"><img src="{{site.baseurl}}{{site.images}}/enqueue.png" /></div>

### Description
___
Allows you to perform a queuing/publish on a queue/topic (defined in the systems).  
Using the right mouse button you can edit/add operations or InputServices OutputServices.

### Developer Studio (VulCon)/GV Console configuration
___

<div markdown="1" data-aos="fade-left">
<table>
  <tr>
    <th>Operation node</th>
    <th>GVCore element</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Enqueue</td>
    <td>GVOperationNode</td>
    <td>Allows to perform a communication with an external systems (invocation, sending messages, receiving messages). <br>
Its op-type parameter will be setted to enqueue.</td>
  </tr>
  </table>
  </div><br>

A **GVOperationNode** is an operation node indicating that ![GreenVulcano® ESB](https://greenvulcano.github.io/gv-documentation/) must perform a communication with an external systems (invocation, sending messages, receiving messages).  
For example, if the node indicates a receive a message (see attribute op-type), you can also define a DequeueFilter that sets certain conditions that the received message must meet.  

The **GVOperationNode** is a Flow element that extends FlowNode. It has the following attributes:

<div markdown="1" data-aos="fade-left">  
<table>
  <tr>
    <th>Attribute</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>class</td>
    <td>fixed</td>
    <td>This attributes must assume the value <b>it.greenvulcano.gvesb.core.flow.GVOperationNode</b>.</td>
  </tr>
  <tr>
    <td>op-type</td>
    <td>fixed</td>
    <td>This attributes must assume the value <b>call, enqueue, dequeue</b>
    </td>
  </tr>
  <tr>
    <td>id-system	-dp</td>
    <td>required</td>
    <td>Identifies the system involved in communication. Can be selected from systems declared as Participant in the Operation section. 
The attribute value can't be null.</td>
  </tr>
  <tr>
    <td>operation-name</td>
    <td>required</td>
    <td>Identifies the communication operation selected by the channel of the system indicated by the <em>id-system</em> attribute. <br>Only the operations of the type declared in the 'op-type' attribute can be selected. <br>Its value cannot be null.</td>
  </tr>
</table>
</div>
    
and the subelements:
* <font color="#238650"> InputServices </font>
* <font color="#238650"> OutputServices </font>
* <font color="#238650"> DequeueFilter </font>

<h3><a name="InputServices"> InputServices </a></h3>
___
Before doing any communication you can run an ordered list of input services.  
This section allows the definition of output services for the current communication operation. The current version of ![GreenVulcano® ESB](https://greenvulcano.github.io/gv-documentation/) provides the following services:  
* Data Transformation
* XML Validation
* OGNL/Java Scripting

The InputServices Element is used by: **GVIteratorOperationNode** and **GVOperationNode**.  
Might contain the following elements: 
* <a href="#primo"><font color="#238650"> Description </font></a>
* <font color="#238650"> gvdte-service </font>
* <font color="#238650"> xml-validation-service </font>
* <font color="#238650"> ognl-script-service </font>
* <font color="#238650"> java-script-service </font>
* <font color="#238650"> dh-selector-service </font>

<h3><a name="OutputServices"> OutputServices </a></h3>  
___
After doing any communication you can run an ordered list of output services.  
This section allows the definition of output services for the current communication operation.  
The current version of ![GreenVulcano® ESB](https://greenvulcano.github.io/gv-documentation/) provides the following services:
* Data Transformation
* XML Validation
* OGNL/Java Scripting

The OutputServices Element is used by ![ChangeGVBufferNode](https://greenvulcano.github.io/gv-documentation/nodes/ChangeGVBuffer), ![GVIteratorOperationNode](https://greenvulcano.github.io/gv-documentation/nodes/Iterator_CoreCall) and **GVOperationNode**.  

Might contain the following elements:
* <font color="#238650"> Description </font>
* <font color="#238650"> gvdte-service </font>
* <font color="#238650"> xml-validation-service </font>
* <font color="#238650"> ognl-script-service </font>
* <font color="#238650"> java-script-service </font>

### In/Out Services
___
<p> <font color="#238650"> <b>gvdte-service</b> </font> </p>
___
Invokes the Data Transformation Engine (GVDTE). Refer to the documentation GVDTE for information on features of ![GreenVulcano® ESB](https://greenvulcano.github.io/gv-documentation/) Data Transformation Engine.  
The following table shows the gvdte-service element's attributes: 

<div markdown="1" data-aos="fade-left">
<table>
  <tr>
    <th>Attribute</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>type</td>
    <td>fixed</td>
    <td>This attribute must assume the value <b>service</b>.</td>
  </tr>
  <tr>
    <td>internal</td>
    <td>fixed</td>
    <td>This attribute must assume the value <b>yes</b>.
    </td>
  </tr>
  <tr>
    <td>critical</td>
    <td>optional</td>
    <td>Defines if the service is critical. A critical service failure mark the entire communication as failed. <br>
The attribute's default value is: <b>yes</b>.</td>
  </tr>
  <tr>
    <td>remove-fields	</td>
    <td>optional</td>
    <td>Indicates whether or not to remove from the buffer the fields used for communication with GVDTE.
The attribute's default value is: <b>yes</b>.</td>
  </tr>
</table>
</div>

Its sub-elements are:
* <font color="#238650"> Description </font>
* <font color="#238650"> map-name-param </font>
* <font color="#238650"> gvdte-context-call </font>
* <font color="#238650"> gvdte-extra-param </font> 

<p><font color="#238650"> map-name-param </font></p> 
Specifies the name of the transformation that should apply by GVDTE.  
This name must indicate a transformation currently configured in GVDTE.  
This parameter can be optional if the input GVBuffer has a property with the name map-name.  

The following table shows the map-name-param element's attributes: 
<div markdown="1" data-aos="fade-left">
<table>
  <tr>
    <th>Attribute</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>type</td>
    <td>fixed</td>
    <td>This attribute must assume the value <b>param</b>.</td>
  </tr>
  <tr>
    <td>name</td>
    <td>fixed</td>
    <td>This attribute must assume the value <b>map-name</b>.
    </td>
  </tr>
  <tr>
    <td>value</td>
    <td>required</td>
    <td>Specifies the name of the transformation that should apply by GVDTE. <br>This name must indicate a transformation currently configured in GVDTE.</td>
  </tr>
</table>
</div>

<p><font color="#238650"> gvdte-context-call </font></p> 
Communication parameters to interact with GVDTE.  
The following table shows the gvdte-context-call element's attributes:
<div markdown="1" data-aos="fade-left">
<table>
  <tr>
    <th>Attribute</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>type</td>
    <td>fixed</td>
    <td>This attribute must assume the value <b>call</b>.</td>
  </tr>
  <tr>
    <td>class</td>
    <td>fixed</td>
    <td>This attribute must assume the value <b>it.greenvulcano.gvesb.virtual.internal.DTEServiceContextCall</b>.
    </td>
  </tr>
  <tr>
    <td>name</td>
    <td>required</td>
    <td>ID used for diagnostics. Is printed on the log files.</td>
  </tr>
</table>
</div> 

<p><font color="#238650"> gvdte-extra-param </font></p>  
Allows you to specify additional parameters for the transformation GVDTE must apply.  
The following table shows the gvdte-extra-param element's attributes:
<div markdown="1" data-aos="fade-left">
<table>
  <tr>
    <th>Attribute</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>type</td>
    <td>fixed</td>
    <td>	This attribute must assume the value <b>param</b>.</td>
  </tr>
  <tr>
    <td>name</td>
    <td>required</td>
    <td>Parameter name. The attribute's value can't be null.
    </td>
  </tr>
  <tr>
    <td>value</td>
    <td>required</td>
    <td>Parameter value. The value of this attribute can be static or can be interpreted dynamically, as the value of a metadata expression that also employee the input GVBuffer.
</td>
  </tr>
</table>
</div>

<p><font color="#238650"><b> xml-validation-service </b></font></p>  
___
Invokes the XML validation engine.  
The following table shows the xml-validation-service element's attributes:
<div markdown="1" data-aos="fade-left">
<table>
  <tr>
    <th>Attribute</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>type</td>
    <td>fixed</td>
    <td>	This attribute must assume the value <b>service</b>.</td>
  </tr>
  <tr>
    <td>internal</td>
    <td>fixed</td>
    <td>This attribute must assume the value <b>yes</b>.</td>
  </tr>
</table>
</div>

Its sub-elements are:
* <font color="#238650"> Description </font>
* <font color="#238650"> xml-validation-call </font>

<p><font color="#238650"> xml-validation-call </font></p>  
Communication parameters to interact with XML validation engine.  
The following table shows the xml-validation-call element's attributes:
<div markdown="1" data-aos="fade-left">
<table>
  <tr>
    <th>Attribute</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>type</td>
    <td>fixed</td>
    <td><b>This attribute must assume the value call</b>.</td>
  </tr>
  <tr>
    <td>class</td>
    <td>fixed</td>
    <td>This attribute must assume the value <b>it.greenvulcano.gvesb.virtual.internal.xml.XMLValidationCallOperation</b>.</td>
  </tr>
  <tr>
    <td>name</td>
    <td>required</td>
    <td> 	ID used for diagnostics. Is printed on the log files. <br>
The attribute's value can't be null. </td>
  </tr>
    <tr>
    <td>default-xsd	</td>
    <td>optional</td>
    <td>	Policies for the use of default XSD.
<br>If 'force-default' is always used the XSD specified in parameter 'default-xsd'.
<br>If 'null xsd' is used used the XSD specified in parameter 'default-xsd' only if the schema specified in the XML is invalid.
<br>Default 'force-default'</td>
  </tr>
  <tr>
    <td>return-dom</td>
    <td>optional</td>
    <td>Returns the parsed and validated org.w3c.dom.Document corresponding to the input object. <br>
The same object is returned if input already is a DOM Document. Default is 'false'.</td>
  </tr>
</table>
</div>

Its sub-elements are:
* <font color="#238650"> Description </font>
* <font color="#238650"> ServiceAlias </font>

<p><font color="#238650"><b> ognl-script-service </b></font></p>  
___
Internal service useful to execute OGNL scripts on GVBuffer instances.  
The following table shows the ognl-script-service element's attributes:
<div markdown="1" data-aos="fade-left">
<table>
  <tr>
    <th>Attribute</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>type</td>
    <td>fixed</td>
    <td>This attribute must assume the value <b>service</b>.</td>
  </tr>
  <tr>
    <td>internal</td>
    <td>fixed</td>
    <td>This attribute must assume the value <b>yes</b>.</td>
  </tr>
  <tr>
    <td>critical</td>
    <td>optional</td>
    <td>Defines if the service is critical. A critical service failure mark the entire communication as failed.<br>
The attribute's default value is: <b>yes</b>.</td>
  </tr>
</table>
</div>

Its sub-elements are:
* <font color="#238650"> Description </font>
* <font color="#238650"> ognl-script-call </font>

<p><font color="#238650"> ognl-script-call </font></p>  
VCL Operation useful to execute OGNL scripts on GVBuffer instances.  
The following table shows the ognl-script-call element's attributes: 
<div markdown="1" data-aos="fade-left">
<table>
  <tr>
    <th>Attribute</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>type</td>
    <td>fixed</td>
    <td>This attribute must assume the value <b>call</b>.</td>
  </tr>
  <tr>
    <td>class</td>
    <td>fixed</td>
    <td>This attribute must assume the value <b>it.greenvulcano.gvesb.virtual.internal.OGNLCallOperation</b>.</td>
  </tr>
  <tr>
    <td>name</td>
    <td>required</td>
    <td>Operation identifier. The attribute's value can't be null.</td>
  </tr>
</table>
</div>

Its sub-elements are:
* <font color="#238650"> Description </font>
* <font color="#238650"> OGNLScript </font>

<p><font color="#238650"><b> java-script-service </b></font></p>  
___
Internal service useful to execute JavaScript scripts on GVBuffer instances.  
The following table shows the java-script-service element's attributes:
<div markdown="1" data-aos="fade-left">
<table>
  <tr>
    <th>Attribute</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>type</td>
    <td>fixed</td>
    <td>This attribute must assume the value <b>service</b>.</td>
  </tr>
  <tr>
    <td>internal</td>
    <td>fixed</td>
    <td>This attribute must assume the value <b>yes</b>.</td>
  </tr>
  <tr>
    <td>critical</td>
    <td>optional</td>
    <td>Defines if the service is critical. A critical service failure mark the entire communication as failed.
The attribute's default value is: yes.</td>
  </tr>
</table>
</div>

Its sub-elements are:
* <font color="#238650"> Description </font>
* <font color="#238650"> java-script-call </font>

<p><font color="#238650"> java-script-call </font></p>
VCL Operation useful to execute JavaScript scripts on GVBuffer instances.  
The following table shows the java-script-call element's attributes:
<div markdown="1" data-aos="fade-left">
<table>
  <tr>
    <th>Attribute</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>type</td>
    <td>fixed</td>
    <td>This attribute must assume the value <b>call</b>.</td>
  </tr>
  <tr>
    <td>class</td>
    <td>fixed</td>
    <td>This attribute must assume the value <b>it.greenvulcano.gvesb.virtual.internal.JSCallOperation</b>.</td>
  </tr>
  <tr>
    <td>name</td>
    <td>required</td>
    <td>Operation identifier. The attribute's value can't be null.</td>
  </tr>
</table>
</div>

Its sub-elements are:
* <font color="#238650"> Description </font>
* <font color="#238650"> Script </font>

<p><font color="#238650"><b>dh-selector-service</b></font></p>
___
Internal service useful to set **DBOBuilder** name to call at **dh-call** operations. Useful only as **InputService** of **GVOperationNode** that references a dh-call operation.  
The following table shows the dh-selector-service element's attributes:  
<div markdown="1" data-aos="fade-left">
<table>
  <tr>
    <th>Attribute</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>type</td>
    <td>fixed</td>
    <td>This attribute must assume the value <b>service</b>.</td>
  </tr>
  <tr>
    <td>internal</td>
    <td>fixed</td>
    <td>This attribute must assume the value <b>yes</b>.</td>
  </tr>
  <tr>
    <td>critical</td>
    <td>optional</td>
    <td>Defines if the service is critical. A critical service failure mark the entire communication as failed.
The attribute's default value is: yes.</td>
  </tr>
</table>
</div>

Its sub-elements are:
* <font color="#238650"> Description </font>
* <font color="#238650"> dh-selector-call </font>

<p><font color="#238650"> dh-selector-call </font></p>
VCL Operation useful to set **DBOBuilder** name to call contained in a **dh-call** operation.  
The following table shows the dh-selector-call element's attributes: 
<div markdown="1" data-aos="fade-left">
<table>
  <tr>
    <th>Attribute</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>type</td>
    <td>fixed</td>
    <td>This attribute must assume the value <b>call</b>.</td>
  </tr>
  <tr>
    <td>class</td>
    <td>fixed</td>
    <td>This attribute must assume the value <b>it.greenvulcano.gvesb.virtual.datahandler.DBOBuilderSelectorCallOperation</b>.</td>
  </tr>
  <tr>
    <td>name</td>
    <td>fixed</td>
    <td>Operation identifier. This attribute must assume the value <b>setDBService</b>.</td>
  </tr>
  <tr>
    <td>DH_SERVICE_NAME</td>
    <td>required</td>
    <td>DBOBuilder name. The attribute's value can't be null.</td>
  </tr>
</table>
</div>

Its sub-elements are:
* <font color="#238650"> Description </font>

<p><font color="#238650"><b>script-service</b></font></p>
___
Internal service useful to execute scripts on GVBuffer instances. 
The following table shows the script-service element's attributes:
<div markdown="1" data-aos="fade-left">
<table>
  <tr>
    <th>Attribute</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>type</td>
    <td>fixed</td>
    <td>This attribute must assume the value <b>services</b>.</td>
  </tr>
  <tr>
    <td>internal</td>
    <td>fixed</td>
    <td>This attribute must assume the value <b>yes</b>.</td>
  </tr>
  <tr>
    <td>critical</td>
    <td>optional</td>
    <td>Defines if the service is critical. A critical service failure mark the entire communication as failed.
The attribute's default value is: yes.</td>
  </tr>
</table>
</div>

Its sub-elements are:
* <font color="#238650"> Description </font>
* <font color="#238650"> script-call </font>

<p><font color="#238650"> script-call </font></p>
VCL Operation useful to execute scripts on GVBuffer instances.  
The following table shows the script-call element's attributes: 
<div markdown="1" data-aos="fade-left">
<table>
  <tr>
    <th>Attribute</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>type</td>
    <td>fixed</td>
    <td>This attribute must assume the value <b>call</b>.</td>
  </tr>
  <tr>
    <td>class</td>
    <td>fixed</td>
    <td>This attribute must assume the value <br>it.greenvulcano.gvesb.virtual.internal.ScriptCallOperation</b>.</td>
  </tr>
  <tr>
    <td>name</td>
    <td>required</td>
    <td>Operation identifier. The attribute's value can't be null.</td>
  </tr>
</table>
</div>

Its sub-elements are:
* <font color="#238650">Description</font>
* <font color="#238650">Script</font>

<p><font color="#238650"><b>json-validation-service</b></font></p>
___
Its sub-elements are:
* <font color="#238650">Description</font>
* <font color="#238650">json-validation-call</font>

<p><font color="#238650">json-validation-call</font></p>
Its sub-elements are:
* <font color="#238650">Description</font>

<p><a name="primo"><font color="#238650">Description</font></a></p>
Each element of the configuration provides a field **Description** optional that might contain free text available to the user.   

This field can be used for notes and information that help users in configuration management and by the application ![GV Console®](https://greenvulcano.github.io/gv-documentation/home/GVConsole#home) to enrich the reports relating to the configuration.  

The Description is always optional, but if used can not be empty. The element value cannot be null.
