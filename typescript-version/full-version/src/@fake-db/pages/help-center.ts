// ** Mock Adapter
import mock from 'src/@fake-db/mock'

// ** ThemeConfig Import
import themeConfig from 'src/configs/themeConfig'

// ** Types
import { HelpCenterCategoriesType, HelpCenterArticlesType, HelpCenterPopularArticlesType } from 'src/@fake-db/types'

type Data = {
  articles: HelpCenterArticlesType
  categories: HelpCenterCategoriesType[]
  popularArticles: HelpCenterPopularArticlesType[]
  keepLearning: HelpCenterPopularArticlesType[]
}

const data: Data = {
  popularArticles: [
    {
      slug: 'getting-started',
      title: 'Getting Started',
      img: '/images/pages/rocket.png',
      subtitle: "Whether you're new or you're a power user, this article will help you get started with the App."
    },
    {
      slug: 'first-steps',
      title: 'First Steps',
      img: '/images/pages/gift.png',
      subtitle: 'Are you a new customer wondering how to get started?'
    },
    {
      slug: 'external-content',
      title: 'Add External Content',
      img: '/images/pages/external-content.png',
      subtitle: 'This article will show you how to expand the functionality of the App.'
    }
  ],
  categories: [
    {
      totalArticles: 56,
      avatarColor: 'success',
      slug: 'getting-started',
      title: 'Getting Started',
      icon: 'mdi:rocket-launch-outline',
      subCategories: [
        {
          slug: 'account',
          title: 'Account',
          icon: 'mdi:cube-outline',
          articles: [
            {
              slug: 'changing-your-username',
              title: 'Changing your username?'
            },
            {
              slug: 'changing-your-primary-email-address',
              title: 'Changing your primary email address?'
            },
            {
              slug: 'changing-your-profile-picture',
              title: 'Changing your profile picture?'
            },
            {
              slug: 'setting-your-profile-to-private',
              title: 'Setting your profile to private?'
            },
            {
              slug: 'deleting-your-personal-account',
              title: 'Deleting your personal account?'
            }
          ]
        },
        {
          slug: 'authentication',
          title: 'Authentication',
          icon: 'mdi:lock-outline',
          articles: [
            {
              slug: 'how-to-create-a-strong-password',
              title: 'How to create a strong password?'
            },
            {
              slug: 'what-is-2FA',
              title: 'What is Two-Factor Authentication?'
            },
            {
              slug: 'how-to-recover-account-if-you-lose-your-2fa-credentials',
              title: 'How to recover account if you lose your 2fa credentials?'
            },
            {
              slug: 'how-to-review-security-logs',
              title: 'How to review security logs?'
            }
          ]
        },
        {
          slug: 'billing',
          title: 'Billing',
          icon: 'mdi:currency-usd',
          articles: [
            {
              slug: 'how-to-update-payment-method',
              title: 'How to update payment method?'
            },
            {
              slug: 'how-to-check-billing-date',
              title: 'How to check billing date?'
            },
            {
              slug: 'where-can-i-view-and-download-payment-receipt',
              title: 'Where can i view and download payment receipt?'
            },
            {
              slug: 'how-to-set-billing-email',
              title: 'How to set billing email?'
            }
          ]
        }
      ]
    },
    {
      slug: 'orders',
      title: 'Orders',
      totalArticles: 112,
      avatarColor: 'info',
      icon: 'mdi:archive-outline',
      subCategories: [
        {
          slug: 'processing-orders',
          title: 'Processing orders',
          icon: 'mdi:archive-outline',
          articles: [
            {
              slug: 'what-happens-when-you-receive-an-online-order',
              title: 'What happens when you receive an online order?'
            },
            {
              slug: 'what-happens-when-you-process-an-order',
              title: 'What happens when you process an order?'
            },
            {
              slug: 'how-to-cancel-an-order',
              title: 'How to cancel an order?'
            },
            {
              slug: 'whats-the-status-of-my-order',
              title: 'What’s the Status of My Order?'
            },
            {
              slug: 'how-to-return-or-exchange-an-item',
              title: 'How to Return or Exchange an Item?'
            }
          ]
        },
        {
          slug: 'payments',
          title: 'Payments',
          icon: 'mdi:currency-usd',
          articles: [
            {
              slug: 'how-do-i-get-paid',
              title: 'How do i get paid?'
            },
            {
              slug: 'how-often-do-i-get-paid',
              title: 'How often do I get paid?'
            },
            {
              slug: 'how-much-do-i-get-paid',
              title: 'How much do I get paid?'
            },
            {
              slug: 'cant-complete-payment-on-paypal',
              title: "Can't Complete Payment on PayPal?"
            },
            {
              slug: 'why-is-my-order-is-still-processing',
              title: 'Why is my order is still processing?'
            }
          ]
        },
        {
          icon: 'mdi:reload',
          slug: 'returns-refunds-replacements',
          title: 'Returns, Refunds and Replacements',
          articles: [
            {
              slug: 'what-can-i-return',
              title: 'What can I return?'
            },
            {
              slug: 'when-will-i-get-my-refund',
              title: 'When will I get my refund?'
            },
            {
              slug: 'can-my-order-be-replaced',
              title: 'Can my order be replaced?'
            }
          ]
        }
      ]
    },
    {
      totalArticles: 28,
      slug: 'safety-security',
      avatarColor: 'primary',
      title: 'Safety and security',
      icon: 'mdi:account-multiple-outline',
      subCategories: [
        {
          slug: 'hacked-accounts',
          title: 'Security and hacked accounts',
          icon: 'mdi:security',
          articles: [
            {
              slug: 'has-my-account-been-compromised?',
              title: 'Has my account been compromised?'
            },
            {
              slug: 'how-to-keep-my-account-safe',
              title: 'How to keep my account safe?'
            },
            {
              slug: 'help-with-my-hacked-account',
              title: 'Help with my hacked account'
            }
          ]
        },
        {
          slug: 'privacy',
          title: 'Privacy',
          icon: 'mdi:lock-outline',
          articles: [
            {
              slug: 'what-is-visible-on-my-profile',
              title: 'What is visible on my profile?'
            },
            {
              slug: 'should-i-turn-on-precise-location',
              title: 'Should I turn on precise location?'
            },
            {
              slug: 'what-location-information-is-displayed',
              title: 'What location information is displayed?'
            }
          ]
        },
        {
          slug: 'spam-fake-accounts',
          title: 'Spam and fake accounts',
          icon: 'mdi:email-outline',
          articles: [
            {
              slug: 'how-to-detect-fake-email',
              title: 'How to detect fake email?'
            },
            {
              slug: 'how-do-I-report-an-impersonation-violation',
              title: 'How do I report an impersonation violation?'
            },
            {
              slug: 'someone-is-using-my-email-address-what-can-i-do',
              title: 'Someone is using my email address, what can I do?'
            }
          ]
        }
      ]
    },
    {
      totalArticles: 22,
      slug: 'rules-policies',
      title: 'Rules and policies',
      avatarColor: 'error',
      icon: 'mdi:clipboard-text-outline',
      subCategories: [
        {
          slug: 'general',
          title: 'General',
          icon: 'mdi:web',
          articles: [
            {
              slug: 'our-rules',
              title: 'Our Rules'
            },
            {
              slug: 'what-is-username-squatting-policy',
              title: 'What is username squatting policy?'
            },
            {
              slug: 'what-is-username-squatting-policy',
              title: 'What is username squatting policy?'
            },
            {
              slug: 'third-party-advertising-in-video-content',
              title: 'Third-party advertising in video content'
            }
          ]
        },
        {
          slug: 'intellectual-property',
          title: 'Intellectual property',
          icon: 'mdi:registered-trademark',
          articles: [
            {
              slug: 'what-is-your-trademark-policy',
              title: 'What is your trademark policy?'
            },
            {
              slug: 'what-are-counterfeit-goods',
              title: 'What are counterfeit goods?'
            },
            {
              slug: 'what-types-of-copyright-complaints-do-you-respond-to',
              title: 'What types of copyright complaints do you respond to?'
            }
          ]
        },
        {
          slug: 'guidelines-for-law-enforcement',
          title: 'Guidelines for law enforcement',
          icon: 'mdi:clipboard-text-outline',
          articles: [
            {
              slug: 'does-we-have-access-to-user-generated-photos-or-videos',
              title: 'Does we have access to user-generated photos or videos?'
            },
            {
              slug: 'data-controller',
              title: 'Data Controller'
            },
            {
              slug: 'requests-for-Twitter-account-information',
              title: 'Requests for Twitter account information'
            }
          ]
        }
      ]
    },
    {
      slug: 'chats',
      title: 'Chats',
      totalArticles: 24,
      avatarColor: 'warning',
      icon: 'mdi:message-outline',
      subCategories: [
        {
          slug: 'general',
          title: 'General',
          icon: 'mdi:web',
          articles: [
            {
              slug: 'what-is-forwarding-limits',
              title: 'What is forwarding limit?'
            },
            {
              slug: 'what-is-last-seen-&-online',
              title: 'What is last seen & online?'
            },
            {
              slug: 'how-to-reply-to-a-message',
              title: 'How to reply to a message?'
            }
          ]
        },
        {
          slug: 'features',
          title: 'Features',
          icon: 'mdi:star-circle-outline',
          articles: [
            {
              slug: 'how-to-send-disappearing-messages',
              title: 'How to send disappearing messages?'
            },
            {
              slug: 'can-i-send-view-once-messages',
              title: 'Can I send view once messages?'
            },
            {
              slug: 'how-to-pin-a-chat',
              title: 'How to pin a chat?'
            }
          ]
        },
        {
          slug: 'encryption',
          title: 'Encryption',
          icon: 'mdi:lock-outline',
          articles: [
            {
              slug: 'what-is-end-to-end-encrypted-backup',
              title: 'What is end-to-end encrypted backup?'
            },
            {
              slug: 'can-i-change-password-for-end-to-end-encrypted-backup',
              title: 'Can I change password for end-to-end encrypted backup?'
            },
            {
              slug: 'can-i-turnoff-end-to-end-encrypted-backup',
              title: 'Can I turnoff end-to-end encrypted backup?'
            }
          ]
        }
      ]
    },
    {
      totalArticles: 27,
      slug: 'connections',
      title: 'Connections',
      avatarColor: 'secondary',
      icon: 'mdi:link-variant',
      subCategories: [
        {
          slug: 'conversations',
          title: 'Conversations',
          icon: 'mdi:message-outline',
          articles: [
            {
              slug: 'how-to-send-messages-to-connections',
              title: 'How to send messages to connections?'
            },
            {
              slug: 'how-to-edit-or-delete-a-sent-message-within-a-conversation',
              title: 'How to edit or delete a sent message within a conversation?'
            },
            {
              slug: 'how-to-delete-a-message',
              title: 'How to delete a message?'
            }
          ]
        },
        {
          slug: 'jobs',
          title: 'Jobs',
          icon: 'mdi:briefcase-outline',
          articles: [
            {
              slug: 'find-relevant-jobs-through-social-hiring-and-meeting-the-team',
              title: 'Find relevant jobs through social hiring and meeting the team?'
            },
            {
              slug: 'how-does-the-app-determine-when-a-job-is-relevant',
              title: 'How does the app determine when a job is relevant?'
            },
            {
              slug: 'how-can-job-seekers-receive-these-notifications',
              title: 'How can job seekers receive these notifications?'
            }
          ]
        },
        {
          slug: 'people',
          title: 'People',
          icon: 'mdi:account-group-outline',
          articles: [
            {
              slug: 'how-to-import-and-invite-your-email-contacts',
              title: 'How to import and invite your email contacts?'
            },
            {
              slug: 'various-ways-to-connect-with-people',
              title: 'Various ways to connect with people?'
            },
            {
              slug: 'how-to-follow-or-unfollow-people',
              title: 'How to follow or unfollow people?'
            }
          ]
        }
      ]
    }
  ],
  articles: {
    'changing-your-username':
      "<p>You can change your username to another username that is not currently in use. If the username you want is not available, consider other names or unique variations. Using a number, hyphen, or an alternative spelling might help you find a similar username that's still available.</p> <p>After changing your username, your old username becomes available for anyone else to claim. Most references to your repositories under the old username automatically change to the new username. However, some links to your profile won't automatically redirect.</p>",
    'changing-your-primary-email-address':
      '<p>You can change the email address associated with your personal account at any time from account settings.</p> <p><strong>Note:</strong> You cannot change your primary email address to an email that is already set to be your backup email address.</p>',
    'changing-your-profile-picture':
      '<p>You can change your profile from account settings any time.</p>. <p><strong>Note:</strong> Your profile picture should be a PNG, JPG, or GIF file, and it must be less than 1 MB in size and smaller than 3000 by 3000 pixels. For the best quality rendering, we recommend keeping the image at about 500 by 500 pixels.',
    'setting-your-profile-to-private':
      '<p>A private profile displays only limited information, and hides some activity.</p> <p>To hide parts of your profile page, you can make your profile private. This also hides your activity in various social features on the website. A private profile hides information from all users, and there is currently no option to allow specified users to see your activity.</p> <p>You can change your profile to private in account settings.</p> ',
    'deleting-your-personal-account':
      '<p>Deleting your personal account removes data associated with your account.</p> <p>When you delete your account we stop billing you. The email address associated with the account becomes available for use with a different account on website. After 90 days, the account name also becomes available to anyone else to use on a new account.</p>',
    'how-to-create-a-strong-password':
      '<p>A strong password is a unique word or phrase a hacker cannot easily guess or crack.</p> <p>To keep your account secure, we recommend you to have a password with at least Eight characters, a number, a lowercase letter & an uppercase character.</p>',
    'what-is-2FA':
      "<p>Two-factor authentication (2FA) is an extra layer of security used when logging into websites or apps. With 2FA, you have to log in with your username and password and provide another form of authentication that only you know or have access to.</p> <p>For our app, the second form of authentication is a code that's generated by an application on your mobile device or sent as a text message (SMS). After you enable 2FA, App generates an authentication code any time someone attempts to sign into your account. The only way someone can sign into your account is if they know both your password and have access to the authentication code on your phone.</p>",
    'how-to-recover-account-if-you-lose-your-2fa-credentials':
      '<p>If you lose access to your two-factor authentication credentials, you can use your recovery codes, or another recovery option, to regain access to your account.</p> <p><strong>Warning:</strong> For security reasons, Our Support may not be able to restore access to accounts with two-factor authentication enabled if you lose your two-factor authentication credentials or lose access to your account recovery methods.</p>',
    'how-to-review-security-logs':
      "<p>You can review the security log for your personal account to better understand actions you've performed and actions others have performed that involve you.</p> <p>You can refer your security log from the settings.</p>",
    'how-to-update-payment-method':
      "<p>You can add a payment method to your account or update your account's existing payment method at any time.</p> <p>You can pay with a credit card or with a PayPal account. When you update your payment method for your account's subscription, your new payment method is automatically added to your other subscriptions for paid products.</p>",
    'how-to-check-billing-date':
      "<p>You can view your account's subscription, your other paid features and products, and your next billing date in your account's billing settings.</p>",
    'how-to-change-billing-cycle':
      "<p>You can change your billing cycle from the account settings billing section.</p> <p>When you change your billing cycle's duration, your GitHub subscription, along with any other paid features and products, will be moved to your new billing cycle on your next billing date.</p>",
    'where-can-i-view-and-download-payment-receipt':
      "<p>You can view your payment from the account settings billing section.</p> <p>You'll also a have a option to download or share your payment receipt from the billing section.</p>",
    'how-to-set-billing-email':
      "<p>Your personal account's primary email is where we send receipts and other billing-related communication.</p> <p>Your primary email address is the first email listed in your account email settings. We also use your primary email address as our billing email address.</p> <p>If you'd like to change your billing email you can do it from account settings.</p>",
    'what-happens-when-you-receive-an-online-order':
      "<p>When you receive an online order, you'll receive a new order notification by email.</p> <p>You'll be able to see that order on the orders page.</p>",
    'what-happens-when-you-process-an-order':
      '<p>When you process an order, The Orders page will show the order with a payment status of Paid or Partially paid.</p> <p>If the customer provided their email address, then they receive a receipt by email.</p>',
    'how-to-cancel-an-order':
      "<p>Canceling an order indicates that you are halting order processing. For example, if a customer requests a cancellation or you suspect the order is fraudulent, then you can cancel the order to help prevent staff or fulfillment services from continuing work on the order. You can also cancel an order if an item was ordered and isn't available.</p> <p>You can cancel an order by clicking the cancel button on orders page.</p>",
    'how-do-i-get-paid':
      '<p>When you set up a payment provider to accept credit card payments, each payment must be processed, so there is usually a delay between when the customer pays for their order and when you receive the payment. After the payment is processed, the purchase amount will be transferred to your merchant account.</p>',
    'how-often-do-i-get-paid':
      '<p>If you use our payment system, then you can check your pay period to see when you receive payouts from credit card orders. Other payment providers have their own rules on when you receive payouts for credit card orders. Check with your provider to find out how often you will be paid.</p> <p>After the payout is sent, it might not be received by your bank right away. It can take a few days after the payout is sent for it to be deposited into your bank account. Check with your bank if you find your payouts are being delayed.</p>',
    'how-much-do-i-get-paid':
      "<p>You can be charged several third-party transaction fees for online transactions. For credit card transactions, the issuer, the acquirer, and the credit card company all charge a small fee for using their services.</p><p>You aren't charged third-party transaction fees for orders processed through our payment system. You pay credit card processing fees, depending on your subscription plan. If you're using a third-party payment provider with us, then you're charged a third-party transaction fee.</p>",
    'whats-the-status-of-my-order':
      '<p>You can check the shipping status of your order on website or the app. If the seller added a tracking number, you can use that to get detailed information about the package’s movement through the shipping carrier.</p><p>You’ll see the shipping status on the orders page. You’ll also see an estimated delivery date which should give you an idea of when you can expect the order to arrive, and a tracking number if it’s available for your order.</p>',
    'how-to-return-or-exchang-an-item':
      "<p>If you need to return or exchange an item, the seller you purchased your order from is the best person to help you. Each seller manages their own orders, and makes decisions about cancellations, refunds, and returns.</p><p>Sellers aren’t required to accept returns, exchanges, or provide a refund unless stated in their shop policies. Go to the shop's homepage and scroll to the bottom to see the shop's policies.</p>",
    'cant-complete-payment-on-paypal':
      "<p>PayPal uses various security measures to protect their users. Because of this, PayPal may occasionally prohibit a buyer from submitting payment to a seller through PayPal.</p><p>If you're ultimately unable to submit payment, try working with the seller to determine an alternative payment method. Learn how to contact a seller.</p>",
    'why-is-my-order-is-still-processing':
      '<p>If you received an email saying that your order is still processing, it means that your purchase is being screened by our third-party partner. All Payments orders are screened to ensure that the orders are legitimate and to protect from possible fraud.</p><p>Most orders are processed in under 72 hours. You’ll receive a confirmation email when the review is complete.</p>',
    'has-my-account-been-compromised':
      "<p>Have you:</p><ul><li>Noticed unexpected posts by your account</li><li>Seen unintended Direct Messages sent from your account</li><li>Observed other account behaviors you didn't make or approve (like following, unfollowing, or blocking)</li></ul>. <p>If you've answered yes to any of the above, please change your password and Revoke connections to third-party applications</p>",
    'how-to-keep-my-account-safe':
      '<p>To help keep your account secure, we recommend the following best practices:</p><ul><li>Use a strong password that you don’t reuse on other websites.</li><li>Use two-factor authentication.</li><li>Require email and phone number to request a reset password link or code.</li><li>Be cautious of suspicious links and always make sure you’re on our website before you enter your login information.</li><li>Never give your username and password out to third parties, especially those promising to get you followers, make you money, or verify you.</li></ul>',
    'help-with-my-hacked-account':
      "<p>If you think you've been hacked and you're unable to log in with your username and password, please take the following two steps:</p><ol><li><p>Request a password reset</p> <p>Reset your password by requesting an email from the password reset form. Try entering both your username and email address, and be sure to check for the reset email at the address associated with your account.</p></li><li><p>Contact Support if you still require assistance</p><p>If you still can't log in, contact us by submitting a Support Request. Be sure to use the email address you associated with the hacked account; we'll then send additional information and instructions to that email address. When submitting your support request please Include both your username and the date you last had access to your account.</p></li></ol>",
    'what-is-visible-on-my-profile':
      '<p>Most of the profile information you provide us is always public, like your biography, location, website, and picture. For certain profile information fields we provide you with visibility settings to select who can see this information in your profile.</p><p>If you provide us with profile information and you don’t see a visibility setting, that information is public.</p>',
    'should-i-turn-on-precise-location':
      '<p>Enabling precise location through our official app allows us to collect, store, and use your precise location, such as GPS information. This allows us to provide, develop, and improve a variety of our services, including but not limited to:</p><ul><li>Delivery of content, including posts and advertising, that is better tailored to your location.</li><li>Delivery of location-specific trends.</li><li>Showing your followers the location you are posting from as part of your post, if you decide to geo-tag your post.</li></ul>',
    'what-location-information-is-displayed':
      "<ul><li>All geolocation information begins as a location (latitude and longitude), sent from your browser or device. We won't show any location information unless you've opted in to the feature, and have allowed your device or browser to transmit your coordinates to us.</li><li>If you have chosen to attach location information to your Posts, your selected location label is displayed underneath the text of the Post.</li><li>When you use the in-app camera on iOS and Android to attach a photo or video to your post and toggle on the option to tag your precise location, that post will include both the location label of your choice and your device's precise location (latitude and longitude), which can be found via API. Your precise location may be more specific than the location label you select. This is helpful when sharing on-the-ground moments.</li></ul>",
    'how-to-detect-fake-email': `<p>We will only send you emails from @${themeConfig.templateName}.com or @t.${themeConfig.templateName}.com. However, some people may receive fake or suspicious emails that look like they were sent by US. These emails might include malicious attachments or links to spam or phishing websites. Please know that we will never send emails with attachments or request your password by email.</p>`,
    'how-do-I-report-an-impersonation-violation':
      '<p>If you believe an account is posing as you or your brand, you or your authorized representative can file a report in our support Center.</p><p>If you believe an account is misusing the identity of somebody else, you can flag it as a bystander by reporting directly from the account’s profile.</p>',
    'someone-is-using-my-email-address-what-can-i-do':
      "<p>Are you trying to create a new account, but you're told your email address or phone number is already in use? This support article outlines how your email address may already be in use and how to resolve the issue.</p>",
    'our-rules':
      '<p>Our purpose is to serve the public conversation. Violence, harassment and other similar types of behavior discourage people from expressing themselves, and ultimately diminish the value of global public conversation. Our rules are to ensure all people can participate in the public conversation freely and safely.</p>',
    'what-is-username-squatting-policy':
      "<p>Username squatting is prohibited by the Rules.</p><p>Please note that if an account has had no updates, no profile image, and there is no intent to mislead, it typically means there's no name-squatting or impersonation. Note that we will not release squatted usernames except in cases of trademark infringement. If your report involves trademark infringement, please consult those policies for instructions for reporting these accounts.</p><p>Attempts to sell, buy, or solicit other forms of payment in exchange for usernames are also violations and may result in permanent account suspension.</p>",
    'third-party-advertising-in-video-content':
      '<p>You may not submit, post, or display any video content on or through our services that includes third-party advertising, such as pre-roll video ads or sponsorship graphics, without our prior consent.</p><p><strong>Note:</strong> we may need to change these rules from time to time in order to support our goal of promoting a healthy public conversation</p>',
    'what-is-your-trademark-policy':
      '<p><strong>You may not violate others’ intellectual property rights, including copyright and trademark.</strong></p><p>A trademark is a word, logo, phrase, or device that distinguishes a trademark holder’s good or service in the marketplace. Trademark law may prevent others from using a trademark in an unauthorized or confusing manner.</p>',
    'what-are-counterfeit-goods':
      '<p>Counterfeit goods are goods, including digital goods, that are promoted, sold, or otherwise distributed using a trademark or brand that is identical to, or substantially indistinguishable from, the registered trademark or brand of another, without authorization from the trademark or brand owner. Counterfeit goods attempt to deceive consumers into believing the counterfeit is a genuine product of the brand owner, or to represent themselves as faux, replicas or imitations of the genuine product.</p>',
    'what-types-of-copyright-complaints-do-you-respond-to':
      '<p>We respond to copyright complaints submitted under the Digital Millennium Copyright Act (“DMCA”). Section 512 of the DMCA outlines the statutory requirements necessary for formally reporting copyright infringement, as well as providing instructions on how an affected party can appeal a removal by submitting a compliant counter-notice.</p><p>If you are concerned about the use of your brand or entity’s name, please review our trademark policy. If you are concerned about a parody, newsfeed, commentary, or fan account, please see the relevant policy here. These are generally not copyright issues.</p>',
    'does-we-have-access-to-user-generated-photos-or-videos': `<p>We provide photo hosting for some image uploads (i.e., pic.${themeConfig.templateName}.com images) as well as account profile photos, and header photos. However, We are not the sole photo provider for images that may appear on the platform. More information about posting photos on platform.</p>`,
    'data-controller':
      '<p>For people who live in the United States or any other country outside of the European Union or the European Economic Area, the data controller responsible for personal data, Inc. based in San Francisco, California. For people who live in the European Union or the European Economic Area, the data controller is our International Unlimited Company based in Dublin, Ireland.</p>',
    'requests-for-Twitter-account-information':
      '<p>Requests for user account information from law enforcement should be directed to us, Inc. in San Francisco, California or Twitter International Unlimited Company in Dublin, Ireland. We respond to valid legal process issued in compliance with applicable law.</p>',
    'what-is-forwarding-limits':
      '<p>You can forward a message with up to five chats at one time. If a message has already been forwarded, you can forward it to up to five chats, including a maximum of one group.</p><p>However, when a message is forwarded through a chain of five or more chats, meaning it’s at least five forwards away from its original sender, a double arrow icon  and "Forwarded many times" label will be displayed. These messages can only be forwarded to one chat at a time, as a way to help keep conversations on platform intimate and personal. This also helps slow down the spread of rumors, viral messages, and fake news.</p>',
    'what-is-last-seen-&-online':
      "<p>Last seen and online tell you the last time your contacts used the app, or if they're online.</p><p>If a contact is online, they have th app open in the foreground on their device and are connected to the Internet. However, it doesn't necessarily mean the contact has read your message.</p>",
    'how-to-reply-to-a-message':
      '<p>You can use the reply feature when responding to a specific message in an individual or group chat.</p><p>Tap and hold the message, then tap Reply. Enter your response and tap Send. Alternatively, swipe right on the message to reply.</p>',
    'how-to-send-disappearing-messages':
      '<p>Disappearing messages is an optional feature you can turn on for more privacy.</p><p>When you enable disappearing messages, you can set messages to disappear 24 hours, 7 days, or 90 days after the time they are sent. The most recent selection only controls new messages in the chat. You can choose to turn disappearing messages on for all of your chats, or select specific chats. This setting won’t affect messages you previously sent or received in the chat. In an individual chat, either user can turn disappearing messages on or off. In a group chat, any group participants can turn disappearing messages on or off. However, a group admin can change group settings to allow only admins to turn disappearing messages on or off.</p>',
    'can-i-send-view-once-messages':
      '<p>For added privacy, you can now send photos and videos that disappear from your chat after the recipient has opened them once. To use view once, please update the app to the latest version available for your device.</p>',
    'how-to-pin-a-chat':
      '<p>The pin chat feature allows you to pin up to three specific chats to the top of your chats list so you can quickly find them.</p><p>On <strong>iPhone</strong>: Swipe right on the chat you want to pin, then tap Pin.</p><p>On <strong>Android</strong>: Tap and hold the chat you want to pin, then tap Pin chat</p>',
    'what-is-end-to-end-encrypted-backup':
      "<p>End-to-end encryption ensures only you and the person you're communicating with can read or listen to what is sent, and nobody in between, not even us. With end-to-end encrypted backup, you can also add that same layer of protection to your backup on iCloud or Google Drive.</p>",
    'can-i-change-password-for-end-to-end-encrypted-backup':
      '<p>When you create an end-to-end encrypted backup, your messages and media are stored in the cloud and secured by a password or a 64-digit encryption key. Your password can be changed at any time as long as you have access to your previous password or key.</p><p><strong>Note:</strong> You won’t be able to restore your backup if you lose your chats and forget your password or key. We can’t reset your password or restore your backup for you.</p>',
    'can-i-turnoff-end-to-end-encrypted-backup':
      '<p>You can choose to turn off end-to-end encrypted backup by using your password or key, or by authenticating with your biometrics or device PIN. If you turn off end-to-end encrypted backup, your messages and media will no longer back up to the cloud unless you set them up to do so.</p>',
    'how-to-send-messages-to-connections':
      "<p>You can send a message to your connections directly from the messaging page or connections page.</p><p>The sent message will be visible in the recipient's message list and possibly in their email, depending on their app notification settings.</p>",
    'how-to-edit-or-delete-a-sent-message-within-a-conversation':
      '<p>You can edit or delete a text only message you send on app.</p><p><strong>Note:</strong>You can only edit or delete a message within 60 minutes of sending the message.</p>',
    'how-to-delete-a-message':
      "<p>A conversation thread starts when a message is sent to one or more people via app messaging. You can delete conversation threads individually or in bulk.</p><p><strong>Important:</strong>You can’t restore or access deleted messages. <strong>The conversation thread will only be deleted from your inbox and not from the recipient's.</strong></p>",
    'find-relevant-jobs-through-social-hiring-and-meeting-the-team':
      '<p>We have introduced two features that will help both job seekers and hirers fully engage with the power of their platform.</p> <ul><li>The #social hiring feature will notify members when a first- or second-degree connection is hiring for a relevant job. When a network connection posts a relevant job on app or adds a #hiring frame to their profile picture, app will notify the job seeker. From there, job seekers will be able to view open jobs that people in their network are hiring for.</li><li>When a member clicks on the job’s details page, they will see the “Meet the Hiring Team” feature. Members will be able to connect and message the entire team listed in this section, including the job poster.</li></ul><p>These features will allow members to find jobs through their connections and stand out to the hiring team. As a result, the hiring team will also be able to reach more potential candidates through their network.</p>',
    'how-does-the-app-determine-when-a-job-is-relevant':
      '<p>We will notify job seekers when someone in their network is hiring for a job that matches their current job title or industry listed in your profile or open to work preferences.</p>',
    'how-can-job-seekers-receive-these-notifications':
      '<p>Members will automatically receive notifications without having to opt in. To turn off the notification, click the three dots next to the notification and select Turn off.</p>',
    'how-to-import-and-invite-your-email-contacts':
      "<p>You can build your network by importing a list of your contacts you already know on the app. This will run a one-time upload of your address book contacts, as well as their detailed contact information. We periodically import and store details about your address book contacts to suggest relevant contacts for you to connect with, to show you relevant updates, and for other uses explained in our Privacy Policy. We'll never email anyone without your permission.</p>",
    'various-ways-to-connect-with-people':
      '<p>Building your network is a great way to stay in touch with alumni, colleagues, and recruiters, as well as connect with new, professional opportunities. A primary email address is mandatory to send invitations. Members become 1st-degree connections when they accept your invitation.</p><p>First-degree connections are given access to any information you’ve displayed on your profile. To ensure an optimal site experience, the members can have a maximum of 30,000 1st-degree connections.</p>',
    'how-to-follow-or-unfollow-people':
      "<p>When you follow someone, new content posted or shared by the person will be displayed in your feed. If you no longer wish to see the content of someone in your feed, you can always unfollow this person.</p><p>You can find people to follow from your feed, the Notifications tab, My Network page, or from the Search bar at the top of the page.</p><p>Unfollowing a person will hide all updates from them on your feed. If you're connected to a person and choose to unfollow them, you'll remain connected, but won't see their updates. They won't be notified that you've unfollowed them. The members will receive a notification if you begin following them again.</p>",
    'what-can-i-return': `<p>You may request returns for most items you buy from the sellers listed on the website. However, you can only return items explicitly identified as "returnable" on the product detail page and/or our policy and within the ‘return window’ period.</p> <p> Please refer to the website Returns policy. to know which categories are "non-returnable" and the specific return windows for categories eligible for return.</p><ul><li>Physically damaged</li><li>Has missing parts or accessories</li><li>Defective</li><li>Different from its description on the product detail page on the website</li></ul>`,
    'when-will-i-get-my-refund':
      '<p>Following are the refund processing timelines after the item is received by Amazon or the Seller notifies us of the receipt of the return:</p><ul><li><strong>Wallet:</strong> 2 hours</li><li><strong>Credit/Debit Card:</strong> 2-4 Business Days</li><li><strong>Bank Account:</strong> 2-4 Business Days</li></ul>',
    'can-my-order-be-replaced':
      '<p>If the item you ordered arrived in a physically damaged/ defective condition or is different from their description on the product detail page, or has missing parts or accessories, it will be eligible for a free replacement as long as the exact item is available with the same seller.</p>'
  },
  keepLearning: [
    {
      slug: 'blogging',
      title: 'Blogging',
      img: '/images/pages/laptop.png',
      subtitle: 'Expert tips & tools to improve your website or online store using blog.'
    },
    {
      slug: 'inspiration-center',
      title: 'Inspiration Center',
      img: '/images/pages/bulb.png',
      subtitle: 'inspiration from experts to help you start and grow your big ideas.'
    },
    {
      slug: 'community',
      title: 'Community',
      img: '/images/pages/discord.png',
      subtitle: 'A group of people living in the same place or having a particular.'
    }
  ]
}

// Knowledge Base
mock.onGet('/pages/help-center/landing').reply(() => {
  return [200, { categories: data.categories, popularArticles: data.popularArticles, keepLearning: data.keepLearning }]
})

mock.onGet('/pages/help-center/categories').reply(config => {
  const { slug, category } = config.params
  const filteredData = data.categories.filter(i => i.slug === category)

  return [200, { data: filteredData[0], activeTab: slug ? slug : filteredData[0].subCategories[0].slug }]
})

mock.onGet('/pages/help-center/articles').reply(() => {
  return [200, Object.keys(data.articles)]
})

mock.onGet('/pages/help-center/article').reply(config => {
  const { article } = config.params

  const category = data.categories.find(i => i.subCategories.find(j => j.articles.some(k => k.slug === article)))

  return [200, { category, article: data.articles[article] }]
})
