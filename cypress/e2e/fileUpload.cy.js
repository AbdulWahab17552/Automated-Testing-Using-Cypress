import 'cypress-file-upload'
describe('File Uploads',()=>{
    // it('Single File Upload',()=>{
    //     cy.visit('https://practice.expandtesting.com/upload')
    //     cy.get('#fileInput').attachFile('Doc1.docx')
    //     cy.get('.btn btn-primary').click()
    // })
    // it('File Rename',()=>{
    //     cy.visit('https://practice.expandtesting.com/upload')
    //     cy.get('#fileInput').attachFile({filePath:'Doc1.docx',fileName:'myfile.docx'})
    //     cy.get('#fileSubmit').click()
    // })
    // it.only('File Rename',()=>{
    //     cy.visit('https://practice.expandtesting.com/upload')
    //     cy.get('#fileInput').attachFile('Doc1.docx',{subjectType:'drag-n-drop'})
    // })
    it('Mutiple File Uploads',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(["Doc1.docx","Research Paper Intro+Methodolgy.docx"])
        cy.wait(5000)
        cy.get(':nth-child(6) > strong').should('have.value','Files you Selected')
    })
    it('file upload shadow dom',()=>{
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.html')
        cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile('Doc1.docx')
    })
})
