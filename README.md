# Loyalty Engine Cloud Infrastructure

This folder contains a set of Resources files for Infrastructure deployment including Dashboard, AWS stack and AWS CI/CD.

## Files and Folders
**.ci-terraform**: Terraform module that builds our AWS CodePipeline CI stack.
**dashboard-api**: (Pending)
**dashboard**: (Pending)
**engine**: (Pending)
**terraform_state_setup**: Terraform module that initializes the remote Terraform State file (terraform.tfstate).
**terraform**: Terraform module which creates project stack on AWS.
**.editorconfig**: File setting code formatting and indentation styles for Visual Studio Code.
**.gitignore**: text file that tells Git which files or folders to ignore in the project.
**bitbucket-pipelines.yml**: Collection of build commands and branch settings, in YAML format, that Bitbucket uses to trigger AWS CodePipeline.
**buildspec.yml**: Collection of build commands and related settings, in YAML format, that AWS CodeBuild uses to setup our main Terraform AWS Stack.

## Terraform CI/CD Setup

Configuring the CI/CD process involves several services and AWS resources, this process has to be performed just **once** on every AWS account we're working. Once it's done, every commit to the `master` branch will trigger the resources to automatically run tests and deploy the AWS architecture changes.

**STEP 1: Remote TFState management setup**

Steps:
- 1. Open your terminal at the **terraform_state_setup** folder.
- 2. Run the module initialization command: `terraform init`
- 3. Run the module apply command: `terraform apply` to create the S3 Bucket and the DynamoDB resources that will store the shared state files.
- 4. Open the */terraform_state_setup/main.tf* file, **uncomment** the following code portion  (Keeping the `# dynamodb_table` code line commented), then, save the file:
```
terraform  {
backend  "s3" {
encrypt  =  true
bucket  =  "loyalty-engine-state-s3"
region  =  "eu-west-1"
# dynamodb_table = "loyalty-engine-dynamodb-terraform-state-lock"
key  =  "terraform-state/terraform.tfstate"
}
}
```
- 5. Run the module initialization command: `terraform init` , this will ask you to confirm if you want to manage the State file remotely, confirm by typing `yes`.
- 6.  On the */terraform_state_setup/main.tf* file, **uncomment** the following code line `dynamodb_table = "loyalty-engine-dynamodb-terraform-state-lock"` . Save the file.
- 7. Run the module initialization command: `terraform init`
- 8. Run the module apply command: `terraform apply` to apply the configuration changes.

Result: 
Our Terraform State file (terraform.tfstate) will be automatically managed in a remote location from now on, so we won't have to worry about losing/corrupting that file.

**STEP 2: Setting Up Terraform CI Stack**:
AWS CodePipeline stack needs to be set just once, for this reason, we need to manually run our Terraform CI module. 

Requirements: 
- [Terraform v0.12.6](https://learn.hashicorp.com/terraform/getting-started/install.html) 
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-macos.html)
- AWS Account's **Access Key ID** and **Secret Access Key** [set as default credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html) on AWS CLI.

Steps:
- 1. Open your terminal at the **.ci-terraform** folder.
- 2. Run the module initialization command: `terraform init`
- 3. Run the module apply command: `terraform apply` to create the stack resources on our AWS account.

Result: 
This steps will create an AWS CodePipeline stack that will manage our CI/CD steps remotely.

**STEP 3: Setting up Bitbucket Pipeline**: 
[Bitbucket Pipelines](https://bitbucket.org/product/features/pipelines) allows us to automatically upload our repo to an AWS S3 Bucket, this will trigger the AWS Pipeline we have set. To setup this process we need to follow these steps:
- 1. On [https://bitbucket.org/](https://bitbucket.org/) go to the Repository site.
- 2. Select `Pipelines` on the left menu. (This will already load our **bitbucket-pipelines.yml** file)
- 3. Go to the bottom of the screen and press `Enable`

Result:
Bitbucket Pipelines is now set, and will automatically trigger our AWS CodePipeline with every new `master` branch commit.
