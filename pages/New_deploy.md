# Guide to the new functionality of deploy of GV ESB V4 alpha1

The new process of deployment is based on two distinct phases: installation of the configuration and release of the configuration installed.

### Installation of the configuration:
Connect to the gvconsole;
Sign in with your credentials
 Go to the “Deploy” section through the sidemenu.
It is possible here to see information regard the current configuration on karaf's instance, a configuration list added in which is possible to deploy(empty at the beginning);
To add a new configuration, click the orange button “+”;
Click “Browse” select the file .zip of the configuration needed to add to the list, select an ID (Be careful! If you choose an ID already chosen, the current configuration will be overwritten by the new one.
Click “Add”.
You will see the configuration added on the list of the configuration
Select the configuration from the list and click on “Deploy” or on the trash can symbol to delete the configurations.
Release
 It is possible at any time to cancel the deployment clicking the “Cancel”  button
Step 1:
 It will show a list of current Services and Operations (inside Services) in both GVCore.xml of the new configuration. In addition there is a button for displaying the GVCore.xml as a file.
After verifying that the configuration is ok, click on "Next"
Step 2:

	Here will be displayed the current properties of the new GVCore.xml with a blank 	space to add the value. In case the property is already in GVCore.xml of the current 	configuration, the value already associated will be displayed. You can decide to 	leave 	the value, or to simply change the current one and writing a new one.
	A control is associated to the page so that all properties must be filled, otherwise it 	will not be possible to continue with the deployment as it could lead to an error in 	the use of the services. When you will be able to value all the properties click on the 	"Next" button.
Step 3:
A confirm is needed. To confirm click on “Proceed”.
Reload Configuration:
To make effective the deployment of the configuration, click on the reload button (next to “Export”) to refresh the system.
Conclusion
The configuration just loaded will be displayed on “Current Configuration” and the date changed.
If you need to export the configuration, click on “Export” and select the directory in which you need to save the configuration on.zip extension.
Enjoy GV ESB Evolution!

	
	
	

	
