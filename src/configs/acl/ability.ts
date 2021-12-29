import { AbilityBuilder, Ability, AbilityClass } from '@casl/ability'

type Actions = 'manage' | 'create' | 'read' | 'update' | 'delete'
type Subjects = 'ACL' | 'all'

export type AppAbility = Ability<[Actions, Subjects]>
export const AppAbility = Ability as AbilityClass<AppAbility>

export default function defineRulesFor(role: string) {
  const { can, rules } = new AbilityBuilder(AppAbility)

  // Write your Ability Rules according to your App Roles
  if (role === 'admin') {
    // Admin can manage everything in the app
    can('manage', 'all')
  } else {
    // All others (Client - in our case we only have other role as client) can only read Access Control Page (ACL)
    can(['read'], 'ACL')
  }

  return rules
}

export function buildAbilityFor(role: string): AppAbility {
  return new AppAbility(defineRulesFor(role), {
    // https://casl.js.org/v5/en/guide/subject-type-detection
    detectSubjectType: object => object!.type
  })
}
