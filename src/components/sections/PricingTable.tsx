import { CheckIcon } from '@heroicons/react/24/solid';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { PRICING_PLANS } from '@/lib/constants';

export default function PricingTable() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {PRICING_PLANS.map((plan) => (
        <Card key={plan.name} highlighted={plan.highlighted} className="flex flex-col">
          <div className="flex-1">
            {plan.badge && (
              <Badge className="mb-4">{plan.badge}</Badge>
            )}
            <h3 className="text-xl font-bold text-text-primary">{plan.name}</h3>

            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-text-primary">
                &euro;{plan.price}
              </span>
              {plan.unit && (
                <span className="text-sm text-text-secondary">{plan.unit}</span>
              )}
            </div>

            {plan.perProject && (
              <p className="mt-1 text-sm text-primary-600 font-medium">
                &euro;{plan.perProject}/project
              </p>
            )}

            <p className="mt-3 text-sm text-text-secondary">{plan.description}</p>

            <ul className="mt-6 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 shrink-0 text-primary-500 mt-0.5" />
                  <span className="text-sm text-text-secondary">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <Button
              href={plan.ctaHref}
              variant={plan.highlighted ? 'primary' : 'secondary'}
              className="w-full"
            >
              {plan.cta}
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
