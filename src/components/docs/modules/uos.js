const uos = {
    moduleName: "uos",
    functions: [

        {
            functionName: "sync",
            status: "text-blue-500",
            parameters: [],
            parametersTypes:[],
            parametersDescription: [],
            description: "Syncs all file systems",
            returns: "Nothing",
            code: `import uos
uos.sync()`
        },

        {
            functionName: "uname",
            status: "text-blue-500",
            parameters: [],
            parametersTypes:[],
            parametersDescription: [],
            description: "Returns information about the SPIKE Hub",
            returns: "String tuple length 5: (sysname, nodename, release, version, machine)",
            code: `import uos
uos.uname()`
        },

        {
            functionName: "chdir",
            status: "text-blue-500",
            parameters: ["dir"],
            parametersTypes:["String"],
            parametersDescription: ["A directory path"],
            description: "Changes the current directory",
            returns: "Nothing",
            code: `import uos
uos.mkdir("NewDir")
uos.chdir("NewDir")`
        },

        {
            functionName: "getcwd",
            status: "text-blue-500",
            parameters: [],
            parametersTypes:[],
            parametersDescription: [],
            description: "Gets the full path of the current working directory",
            returns: "A String file path",
            code: `import uos
uos.getcwd()`
        },

        {
            functionName: "listdir",
            status: "text-blue-500",
            parameters: [],
            parametersTypes:[],
            parametersDescription: [],
            description: "Lists all files and folders in the current working directory",
            returns: "List of String file and folder names",
            code: `import uos
uos.uname()`
        },

        {
            functionName: "mkdir",
            status: "text-blue-500",
            parameters: ["newDir"],
            parametersTypes:["String"],
            parametersDescription: ["A string to title the new folder"],
            description: "Creates a new folder in the current working directory",
            returns: "Nothing",
            code: `import uos
uos.mkdir("directory")`
        },

        {
            functionName: "remove",
            status: "text-blue-500",
            parameters: ["fileName"],
            parametersTypes:["String"],
            parametersDescription: ["File/folder path to be deleted"],
            description: "Deletes a file/folder in the file system",
            returns: "Nothing",
            code: `import uos
uos.mkdir("directory")
uos.delete("directory")`
        },

        {
            functionName: "rename",
            status: "text-blue-500",
            parameters: ["oldName", "newName"],
            parametersTypes:["String", "String"],
            parametersDescription: ["File path of file/folder to be renamed", "New name of the specified folder/file"],
            description: "Renames a file/folder",
            returns: "Nothing)",
            code: `import uos
uos.mkdir("directory")
uos.rename("directory", "newDirectory")`
        },

        {
            functionName: "rmdir",
            status: "text-blue-500",
            parameters: ["dir"],
            parametersTypes:["String"],
            parametersDescription: ["Directory path to be deleted"],
            description: "Deletes a directory/folder",
            returns: "Nothing",
            code: `import uos
# Creates a deletes a directory
uos.mkdir("directory")
uos.rmdir("directory")`
        },

        {
            functionName: "stat",
            status: "text-blue-500",
            parameters: [],
            parametersTypes:[],
            parametersDescription: [],
            description: "Returns information about a file/folder",
            returns: "Integer tuple length 10: first entry is file/folder size",
            code: `import uos
uos.stat("main.py")`
        },

        {
            functionName: "statvfs",
            status: "text-blue-500",
            parameters: [],
            parametersTypes:[],
            parametersDescription: [],
            description: "Returns information about a mounted file system",
            returns: `Integer tuple length 10
            f_bsize - file system block size
            f_frsize - fragment size
            f_blocks - size of fs in f_frsize units
            f_bfree - number of free blocks
            f_bavail - number of free blocks for unpriviliged users
            f_files - number of inodes
            f_ffree - number of free inodes
            f_favail - number of free inodes for unpriviliged users
            f_flag - mount flags
            f_namemax - maximum filename length`,
            code: `import uos
uos.statvfs("main.py")`
        },

        {
            functionName: "mount",
            status: "text-blue-500",
            parameters: ["fsobj", "mount_point"],
            parametersTypes:["VFS Object", "String"],
            parametersDescription: ["File system object, can be created using VfsLfs2 class", "File system directory path"],
            description: "Nounts a file to the MicroPython file system.",
            returns: "Nothing",
            code: `# Example Coming Soon!
# Use VfsLfs2!`
        },

        {
            functionName: "umount",
            status: "text-blue-500",
            parameters: ["file"],
            parametersTypes:["String"],
            parametersDescription: ["File path of a file to unmount"],
            description: "Unmounts a file from the filesystem",
            returns: "Nothing",
            code: `# Example Coming Soon!`
        },

        
    ]
}

export default uos;

