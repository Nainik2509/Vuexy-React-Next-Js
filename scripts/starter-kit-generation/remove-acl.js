const fs = require('fs')
const pathConfig = require('../configs/paths.json')

const aclDataToReplace = [
    {
        file: `${pathConfig.starterKitTSXPath}/src/layouts/components/acl/CanViewNavGroup.tsx`,
        replacements: [
            { from: "import { ReactNode, useContext } from 'react'", to: "import { ReactNode } from 'react'" },
            { from: "import { NavGroup, NavLink } from 'src/@core/layouts/types'", to: "import { NavGroup } from 'src/@core/layouts/types'" },
            { from: new RegExp(/\/\/ \*\* Component Imports/), to: '' },
            { from: "import { AbilityContext } from 'src/layouts/components/acl/Can'", to: '' },
            { from: "const { children, navGroup } = props", to: 'const { children } = props' },
            { from: new RegExp(/\/\/ \*\* Hook/), to: '' },
            { from: "const ability = useContext(AbilityContext)", to: '' },
            { from: new RegExp(/const canViewMenuGroup[\s\S]*?&& hasAnyVisibleChild[\s\S]*?}/), to: '' },
            { from: "return canViewMenuGroup(navGroup) ? <>{children}</> : null", to: 'return <>{children}</>' },
        ]
    },
    {
        file: `${pathConfig.starterKitTSXPath}/src/layouts/components/acl/CanViewNavLink.tsx`,
        replacements: [
            { from: "import { ReactNode, useContext } from 'react'", to: "import { ReactNode } from 'react'" },
            { from: new RegExp(/\/\/ \*\* Component Imports/), to: '' },
            { from: "import { AbilityContext } from 'src/layouts/components/acl/Can'", to: '' },
            { from: "const { children, navLink } = props", to: 'const { children } = props' },
            { from: new RegExp(/\/\/ \*\* Hook/), to: '' },
            { from: "const ability = useContext(AbilityContext)", to: '' },
            { from: "return ability && ability.can(navLink.action, navLink.subject) ? <>{children}</> : null", to: 'return <>{children}</>' },
        ]
    },
    {
        file: `${pathConfig.starterKitTSXPath}/src/layouts/components/acl/CanViewNavSectionTitle.tsx`,
        replacements: [
            { from: "import { ReactNode, useContext } from 'react'", to: "import { ReactNode } from 'react'" },
            { from: new RegExp(/\/\/ \*\* Component Imports/), to: '' },
            { from: "import { AbilityContext } from 'src/layouts/components/acl/Can'", to: '' },
            { from: "const { children, navTitle } = props", to: 'const { children } = props' },
            { from: new RegExp(/\/\/ \*\* Hook/), to: '' },
            { from: "const ability = useContext(AbilityContext)", to: '' },
            { from: "return ability && ability.can(navTitle.action, navTitle.subject) ? <>{children}</> : null", to: 'return <>{children}</>' },
        ]
    },
    {
        file: `${pathConfig.starterKitJSXPath}/src/layouts/components/acl/CanViewNavGroup.js`,
        replacements: [
            { from: new RegExp(/\/\/ \*\* React Imports/), to: '' },
            { from: "import { useContext } from 'react'", to: '' },
            { from: new RegExp(/\/\/ \*\* Component Imports/), to: '' },
            { from: "import { AbilityContext } from 'src/layouts/components/acl/Can'", to: '' },
            { from: "const { children, navGroup } = props", to: 'const { children } = props' },
            { from: new RegExp(/\/\/ \*\* Hook/), to: '' },
            { from: "const ability = useContext(AbilityContext)", to: '' },
            { from: new RegExp(/const canViewMenuGroup[\s\S]*?&& hasAnyVisibleChild[\s\S]*?}/), to: '' },
            { from: "return canViewMenuGroup(navGroup) ? <>{children}</> : null", to: 'return <>{children}</>' },
        ]
    },
    {
        file: `${pathConfig.starterKitJSXPath}/src/layouts/components/acl/CanViewNavLink.js`,
        replacements: [
            { from: new RegExp(/\/\/ \*\* React Imports/), to: '' },
            { from: "import { useContext } from 'react'", to: '' },
            { from: new RegExp(/\/\/ \*\* Component Imports/), to: '' },
            { from: "import { AbilityContext } from 'src/layouts/components/acl/Can'", to: '' },
            { from: "const { children, navLink } = props", to: 'const { children } = props' },
            { from: new RegExp(/\/\/ \*\* Hook/), to: '' },
            { from: "const ability = useContext(AbilityContext)", to: '' },
            { from: "return ability && ability.can(navLink.action, navLink.subject) ? <>{children}</> : null", to: 'return <>{children}</>' },
        ]
    },
    {
        file: `${pathConfig.starterKitJSXPath}/src/layouts/components/acl/CanViewNavSectionTitle.js`,
        replacements: [
            { from: new RegExp(/\/\/ \*\* React Imports/), to: '' },
            { from: "import { useContext } from 'react'", to: '' },
            { from: new RegExp(/\/\/ \*\* Component Imports/), to: '' },
            { from: "import { AbilityContext } from 'src/layouts/components/acl/Can'", to: '' },
            { from: "const { children, navTitle } = props", to: 'const { children } = props' },
            { from: new RegExp(/\/\/ \*\* Hook/), to: '' },
            { from: "const ability = useContext(AbilityContext)", to: '' },
            { from: "return ability && ability.can(navTitle.action, navTitle.subject) ? <>{children}</> : null", to: 'return <>{children}</>' },
        ]
    }
]

const removeACL = () => {
    aclDataToReplace.forEach(obj => {
        if (fs.existsSync(obj.file)) {
            fs.readFile(obj.file, 'utf-8', (err, data) => {
                if (err) {
                    console.log(err);

                    return
                } else {
                    let result = data
                    obj.replacements.forEach(rep => {
                        result = result.replace(rep.from, rep.to)
                    })
                    fs.writeFile(obj.file, result, (err) => {
                        if (err) {
                            console.log(err);

                            return
                        }
                    })
                }

            })
        }
    })

    if(fs.existsSync(`${pathConfig.starterKitTSXPath}/src/configs/acl.ts`)){
        fs.unlink(`${pathConfig.starterKitTSXPath}/src/configs/acl.ts`, err => {
            if(err){
                console.log(err);

                return
            }
        })
    }else{
        console.log('ACL config doesnt exist');
        return 
    }
    if(fs.existsSync(`${pathConfig.starterKitJSXPath}/src/configs/acl.js`)){
        fs.unlink(`${pathConfig.starterKitJSXPath}/src/configs/acl.js`, err => {
            if(err){
                console.log(err);

                return
            }
        })
    }else{
        console.log('ACL config doesnt exist');
        return 
    }
}



removeACL()