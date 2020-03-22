# Installing Dropil Chain

## Install Golang ##
Before starting, you must install Golang to setup Dropil Chain. You can download Golang [here](https://golang.org/dl/). 
Once downloaded and installed, move onto the next step.

## Download Dropil Chain Source ##
Download the Dropil Chain source from our Github [here](https://github.com/dropil/dropilchain) (testnet source can be found [here](https://github.com/dropil/dropilchain-testnet)) and extract the contents to your Golang src folder. 
The path to the src folder is typically `C:\Users\<USERNAME>\go\src`. Create the src folder if it does not already exist.
The contents of the download from Github should be placed in `C:\Users\<USERNAME>\go\src\dropilchain`.

## Install Dropil Chain Daemon & CLI ##
Open your favorite command prompt (i.e. PowerShell) and navigate to the Dropil Chain src folder you just created.

The command to navigate to the folder is `cd C:\Users\<USERNAME>\go\src\dropilchain` or whatever path your Dropil Chain source is located.

Once inside the correct folder, run the next two commands. Depending on your internet connection, the first command may take a few minutes.

```
go install ./cmd/dropd
go install ./cmd/dropcli
```

## Congratulations! ##
Dropil Chain is now setup on your computer/server! You now have access to the Dropil Chain CLI `dropcli`.      