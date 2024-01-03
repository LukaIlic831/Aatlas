const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const useDate = (dateCreated: string | null) => {
  const date = dateCreated ? new Date(dateCreated) : null;
  const month = date ? months[date.getMonth()] : null;
  const day = date?.getDate();
  const year = date?.getFullYear();
  return `Joined on ${month} ${day}, ${year}`;
};

export default useDate;
