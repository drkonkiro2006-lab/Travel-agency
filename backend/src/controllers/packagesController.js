const packages = [
  {
    id: '1',
    title: 'Alpine Majesty',
    description: 'The pinnacle of European winter luxury across the Swiss and Italian Alps.',
    price: '$15,200',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAT21n2lVt04_u4y0eKYAUSCwFlZhsOXecpBUNaQQKS6DB9U-uH1H3CYapEeDcVX56lk8YLUY7wlU-DLH9LqPiP15Jnebuu9LhJbKYHsQ8bF2H2JUxXWS11W7Dvjo15ogtELGAQZ73FAbgbcoE1Z2rb7kpV4hOUUo_riiIIS-w91utPwUyNiiUHhpjK_pFxArnlAjD22hbR_Erg6W0vpUNqH3XVNm_mPzS58OOXLAmgqdCmiRjOc4ZhOGMC0hLv9qyb3e9yDl7sr2go',
  },
  {
    id: '2',
    title: 'Australian Odyssey',
    description: 'From the Red Centre to the coral labyrinths of the Great Barrier Reef.',
    price: '$11,500',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2Y4C--8tkaEbvxiV9y_o_YWlEYXSDiGnMZfqcZMNl94Ld0XBZ3MLPeuhdrV1qwCQfk0OpEIWClMic73UfSrR31og2mg_0mLSNRfD-o912NZOHnvpN8uFdgqtvQJxAfQWy2F3kWfC440VQa7rnK7V4y5rHNdizCgFIHVo93kI2uvjbV7jNHhrLIIgy0fCp8aiEGbn8r_ulxAIwFP4-CMkrs2_uB7W29EF47Anwc_soDATMKIlQxUHleCU0XJ-ds_WuAxgDbi5f_vqB',
  },
  {
    id: '3',
    title: 'Amalfi Elegance',
    description: 'Coastal sophistication, private yacht charters, and Michelin-starred dining.',
    price: '$13,900',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYnSObwS1C9Y7jcePFldouBfT0S4OXUnr8jGq3t8G_NcijqeUpZDTNZ1SPxfg5i5SK4vWKKdXL8PVGh4ArM6NIYjqlZ26HPYmqwBTQb03RF29OxGnrEV3V65ou9H8i6Vea_GCBxiRwSQvNd6JuaYpO6rteNyIfFPexauQwpD6gxw6QcpD9BFp6gT53bV8okWZ8dIK6cQLU6vUb8cEMZK8uoYFJhSvFefKITituDJu3dxhYJNejVL2MjdsQjNmd_1RebN5GcVncupAJ',
  }
];

const getPackages = (req, res) => {
  // Simulate network delay for frontend loading UI
  setTimeout(() => {
    res.json(packages);
  }, 600);
};

module.exports = { getPackages };
