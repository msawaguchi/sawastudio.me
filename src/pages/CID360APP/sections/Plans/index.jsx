import { RiCheckLine, RiCloseLine } from 'react-icons/ri'
import { PLANS } from '../../content'
import { Container } from '../../styles'
import {
  PlansSection,
  PlansHeader,
  MainPlansGrid,
  PricingCard,
  PlanBadge,
  PlanName,
  PlanPriceBlock,
  PlanDescription,
  PlanFeatures,
  PlanFeaturesList,
  PlanFeatureDivider,
  PlanFeatureItem,
  PlanFootnote,
  PlanButton,
  SecondaryPlanCard,
  SecondaryPlanInner,
  SecondaryPlanContent,
  SecondaryPlanPrice,
  SecondaryPlanFeatures,
  LegalNote,
} from './styles'

function PlanFeatureList({ plan }) {
  const isPro = plan.id === 'pro'
  const hasExcluded = plan.excluded?.length > 0

  return (
    <PlanFeatures>
      <PlanFeaturesList>
        {plan.included.map((feature) => (
          <PlanFeatureItem key={feature} $pro={isPro}>
            <RiCheckLine aria-hidden="true" />
            {feature}
          </PlanFeatureItem>
        ))}

        {hasExcluded && (
          <>
            <PlanFeatureDivider $pro={isPro} aria-hidden="true" />
            {plan.excluded.map((feature) => (
              <PlanFeatureItem key={feature} $pro={isPro} $excluded>
                <RiCloseLine aria-hidden="true" />
                {feature}
              </PlanFeatureItem>
            ))}
          </>
        )}
      </PlanFeaturesList>
    </PlanFeatures>
  )
}

function PlanCard({ plan }) {
  const isPro = plan.id === 'pro'

  return (
    <PricingCard $variant={plan.id}>
      <PlanBadge $variant={plan.id}>{plan.badge}</PlanBadge>
      <PlanName $pro={isPro}>{plan.name}</PlanName>
      <PlanPriceBlock $pro={isPro}>
        <strong>{plan.price}</strong>
        {plan.period && <span>{plan.period}</span>}
      </PlanPriceBlock>
      <PlanDescription $pro={isPro}>{plan.description}</PlanDescription>
      <PlanFeatureList plan={plan} />
      <PlanButton href="#download" $variant={plan.id}>
        {plan.cta}
      </PlanButton>
      {plan.footnote && <PlanFootnote>{plan.footnote}</PlanFootnote>}
    </PricingCard>
  )
}

export function Plans() {
  const { secondary } = PLANS

  return (
    <PlansSection id="planos">
      <Container>
        <PlansHeader>
          <h2>{PLANS.title}</h2>
          <p>{PLANS.subtitle}</p>
        </PlansHeader>

        <MainPlansGrid>
          {PLANS.main.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </MainPlansGrid>

        <SecondaryPlanCard>
          <SecondaryPlanInner>
            <SecondaryPlanContent>
              <h3>{secondary.title}</h3>
              <p>{secondary.description}</p>
              <SecondaryPlanFeatures>
                {secondary.features.map((feature) => (
                  <li key={feature}>
                    <RiCheckLine aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </SecondaryPlanFeatures>
            </SecondaryPlanContent>

            <SecondaryPlanPrice>
              <strong>{secondary.price}</strong>
              <span>{secondary.period}</span>
            </SecondaryPlanPrice>

            <PlanButton href="#download" $variant="secondary">
              {secondary.cta}
            </PlanButton>
          </SecondaryPlanInner>
        </SecondaryPlanCard>

        <LegalNote>{PLANS.note}</LegalNote>
      </Container>
    </PlansSection>
  )
}
