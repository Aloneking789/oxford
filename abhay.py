import matplotlib.pyplot as plt

# Data for the pie chart.
sizes = [15, 30, 45, 10]  # values for each segment
labels = ["Segment A", "Segment B", "Segment C", "Segment D"]
colors = ["gold", "yellowgreen", "lightcoral", "lightskyblue"]
explode = (0.1, 0, 0, 0)  # only "explode" the first slice

# Create the pie chart.
plt.pie(sizes, explode=explode, labels=labels, colors=colors, 
        autopct='%1.1f%%', shadow=True, startangle=140)

# Add a title.
plt.title("Pie Chart Example")

# Ensure that pie is drawn as a circle.
plt.axis('equal')

# Display the chart.
plt.show()