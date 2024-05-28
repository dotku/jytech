export default function PricingPage() {
  return (
    <>
      <h2>Pricing</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Website</td>
            <td>$500 / mo</td>
          </tr>
          <tr>
            <td>SEO</td>
            <td>$300 / mo</td>
          </tr>
          <tr>
            <td>Facebook Advertizing</td>
            <td>$100 ~ $300 / mo</td>
          </tr>
        </tbody>
      </table>
      <h3>Demo Projects</h3>
      <div>
        <ul>
          <li>
            <a href="https://alumadvisors.com/">Alum Advisors</a>
          </li>
          <li>
            <a href="https://next-appointment-app-one.vercel.app/">
              Next Appointment App
            </a>
          </li>
          <li>
            <a href="https://qixing-next.zeabur.app/">Qi Xing Au Pair</a>
          </li>
          <li>Next Nail Shop (comming soon)</li>
        </ul>
      </div>
    </>
  );
}
