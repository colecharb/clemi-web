import DownArrow from '../components/DownArrow';

const Kitchen = () => {
  return (
    <>
      <div className='min-h-[85dvh] place-content-center'>
        <h2>Kitchen</h2>
        <h3>Micro-catering: Cooking with Intention</h3>
        <p>
          Food is one of the most immediate ways we experience care. My approach
          to cooking is rooted in the belief that a shared meal can be both
          grounding and transformative — that it can connect you to your body,
          your pleasure, and your sense of belonging.
        </p>
        <p>
          When I cook, my intention is to bring joy, warmth, and a sense of love
          and security to everyone at the table. My food invites you in like
          your grandmother's kitchen — comforting, abundant, and made with care.
          Each dish is prepared with deep attention to detail: balancing
          nourishment and flavor, honoring dietary needs, and celebrating the
          ingredients that are in season and close to home.
        </p>
        <p>
          I see food as a way of holding space. Every menu I create is designed
          to align with the rhythm and intention of the retreat, event, or
          gathering — supporting guests as they move through creative,
          spiritual, or healing processes. My meals are adventurous yet
          comforting, simple yet elevated, allowing participants to feel
          revitalized and connected without being overstimulated.
        </p>
        <p>
          Sourcing is part of the story, too. I prioritize local and sustainable
          ingredients, minimize waste, and design menus that honor the land
          we're on. My cooking is not about luxury for its own sake — it's about
          integrity, nourishment, and beauty in simplicity.
        </p>
        <p>
          What I offer is more than catering. It's an experience that nourishes
          body and soul — food that becomes part of your event's memory, a
          sensory expression of care that lingers long after the plates are
          cleared.
        </p>
        <DownArrow />
      </div>

      <div className='flex flex-row gap-10 max-w-full overflow-hidden'>
        <div className='flex-1'>
          <img
            className='w-full h-auto'
            src='/images/sampleMenus/SUMMER.png'
            alt='Summer menu'
          />
        </div>
        <div className='flex-1'>
          <img
            className='w-full h-auto'
            src='/images/sampleMenus/WINTER.png'
            alt='Winter menu'
          />
        </div>
      </div>

      <h3>Retreat & Event Offerings</h3>

      <p>
        Each gathering is unique — and the food should reflect that. I design
        every menu in conversation with your event's purpose, schedule, and the
        season we're in. My role is to ensure that the meal(s) become an
        integral part of your experience: moments of pause, grounding, and
        delight that complement the flow of creative and healing work.
      </p>
      <p>
        From restorative broths and nourishing breakfasts to vibrant shared
        dinners, my approach centers food that is simple, fresh, and deeply
        satisfying. I balance comfort and elegance — dishes that feel familiar
        with an element of discovery.
      </p>
      <p>
        I work closely with each host to shape a culinary experience that aligns
        with your vision, dietary needs, and budget. Pricing reflects not just
        the ingredients and preparation, but the care, planning, and
        intentionality that go into curating a holistic event experience. Every
        meal is an extension of the atmosphere you're creating — an act of
        nourishment that supports your guests in arriving fully.
      </p>
      <p>
        Whether you're hosting an intimate supper club, your friends for a
        weekend of reflection, an artist residency, or a wellness retreat, I
        bring the same attention to detail, heart, and respect for the land that
        defines all of my cooking.
      </p>

      <h3>Retreat & Event Packages</h3>

      <p>
        Each menu is designed to align with the rhythm of your retreat — meals
        that ground, delight, and invite connection. Pricing below reflects menu
        design, on-site cooking, and family-style service, with groceries quoted
        separately based on your menu, sourcing preferences, and group size.
      </p>
      <p>Accommodations are to be provided by the client.</p>

      <h4>Intimate Gatherings (4–12 guests)</h4>
      <p>
        Starting from $200 CAD per meal. For smaller retreats, residencies, or
        workshops where food is part of the creative and restorative flow.
      </p>
      <h5>Includes:</h5>
      <ul>
        <li>Custom seasonal menu design</li>
        <li>Ingredient sourcing, coordination, and budget planning</li>
        <li>On-site cooking and family-style presentation</li>
        <li>Dietary accommodations and allergy management</li>
        <li>Kitchen management and cleanup support</li>
      </ul>
      <p>
        Ideal for artist residencies, weekend retreats, and small group
        workshops. Average full-day service (3 meals) from $500 CAD plus
        ingredient sourcing.
      </p>

      <h4>Building Community (12–30 guests)</h4>
      <p>
        Starting from $300 CAD per meal. For larger retreats where meals are
        central to the collective experience — abundant, comforting, and
        beautifully presented.
      </p>
      <h5>Includes:</h5>
      <ul>
        <li>Custom seasonal menu design</li>
        <li>Ingredient sourcing, coordination, and budget planning</li>
        <li>On-site cooking and family-style presentation</li>
        <li>Dietary accommodations and allergy management</li>
        <li>Kitchen management and cleanup support</li>
      </ul>
      <p>
        Designed for multi-day wellness, leadership, or creative intensives.
        Average full-day service (3 meals) from $700 CAD plus ingredient
        sourcing.
      </p>

      <h3>Ingredient Sourcing & Budget</h3>
      <p>
        Groceries are tailored to your retreat's scale, season, and dietary
        needs. Typical grocery budgets range between:
      </p>
      <p>$20–35 CAD per person per day for simple, nourishing menus</p>
      <p>
        $35–50 CAD per person per day for elevated or specialty menus (organic,
        local, or dietary-specific sourcing)
      </p>

      <h3>Custom Inquiries</h3>
      <p>
        For gatherings larger than 30 guests or events with unique needs such as
        cooking demos, farm-to-table collaborations, or themed menus, please{' '}
        <a href='contact'>reach out</a> for a custom quote.
      </p>

      <h3>Booking Process</h3>
      <p>
        Each retreat begins with a consultation call to explore your event's
        flow, purpose, and food philosophy. From there, I'll share a customized
        proposal with sample menus, grocery budget, and total pricing.
      </p>
      <p>
        The ingredient sourcing budget is required as a deposit to secure your
        dates. For multi-day experiences, 50% of my fee is billed prior to the
        event, and the remaining 50% paid upon completion.
      </p>

      <h3>Optional Add-ons</h3>
      <ul>
        <li>
          Cooking demo or interactive workshop as part of one of the meals –
          $20/per participant
        </li>
        <li>
          Sourcing from local farms / foraging / cultural food storytelling –
          custom quote
        </li>
      </ul>
    </>
  );
};

export default Kitchen;
