/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
  aws_project_region: 'ap-southeast-1',
  aws_cognito_identity_pool_id: 'ap-southeast-1:07c7aeae-aa08-49fd-aed6-b064b8a1bb5b',
  aws_cognito_region: 'ap-southeast-1',
  aws_user_pools_id: 'ap-south-1_iphUyKUCq',
  aws_user_pools_web_client_id: '6eakduuh7cnlb1fm7u1fjsdcm4',
  oauth: {
    domain: 'master0e06a1e7-0e06a1e7-dev.auth.ap-southeast-1.amazoncognito.com',
    scope: ['phone', 'email', 'openid', 'profile', 'aws.cognito.signin.user.admin'],
    redirectSignIn: 'http://localhost:3000/',
    redirectSignOut: 'http://localhost:3000/login/',
    responseType: 'code'
  },
  federationTarget: 'COGNITO_USER_POOLS',
  aws_cognito_username_attributes: ['EMAIL'],
  aws_cognito_social_providers: [],
  aws_cognito_signup_attributes: ['EMAIL'],
  aws_cognito_mfa_configuration: 'OFF',
  aws_cognito_mfa_types: ['SMS'],
  aws_cognito_password_protection_settings: {
    passwordPolicyMinLength: 8,
    passwordPolicyCharacters: []
  },
  aws_cognito_verification_mechanisms: ['EMAIL']
}

export default awsmobile
