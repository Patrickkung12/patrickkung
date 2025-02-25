document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("carbForm");
  const resultArea = document.getElementById("resultArea");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const weight = parseFloat(document.getElementById("weight").value) || 0;
    const height = parseFloat(document.getElementById("height").value) || 0;

    // สูตรคำนวณคาร์โบไฮเดรต (ปรับเปลี่ยนได้ตามต้องการ)
    const carbRequirement = (weight * 15) + (height / 10);

    resultArea.textContent = คาร์โบไฮเดรตที่แนะนำ: ${carbRequirement.toFixed(2)} กรัม;
  });
});