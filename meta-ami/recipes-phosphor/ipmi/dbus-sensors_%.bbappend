FILESEXTRAPATHS_prepend := "${THISDIR}/${PN}:"
SRC_URI_append += "file://0001-Added-Sensor-Units.patch"
SRC_URI_append += "file://0002-Updated-Sdr-Properties.patch"
SRC_URI_append += "file://0003-Updated-Sdr-Properties-for-PWM.patch"
SRC_URI_append += "file://0004-digitalgpio-eventsensor.patch"
SRC_URI_append += "file://0005-dualgpio-discretesensor.patch"
SRC_URI_append += "file://0006-intrusion-psuevent-sensor.patch"
SRC_URI_append += "file://0007-psu-pwm-sensortypes.patch"
SRC_URI_append += "file://0008-eventmasksdrinfo-and-dontlogbit.patch"
SRC_URI_append += "file://0009-Fixed-Threshold-setting-ADC.patch"
SRC_URI_append += "file://0010-Removed-Pwm-sensor.patch"
SRC_URI_append += "file://0011-Updated-sdr-discrete.patch"
SRC_URI_append += "file://0012-added-sensor-type-name-discrete-sensor-objpath.patch"
SRC_URI_append += "file://0013-Fixed-sensor-reading-during-host-off.patch"
SRC_URI_append += "file://0014-fixed-coredump-for-Ipmbsensor.patch"
SRC_URI_append += "file://0015-ampere-socsensor-support.patch"

#SYSTEMD_SERVICE_${PN} += "xyz.openbmc_project.gpiosensor.service"
#SYSTEMD_SERVICE_${PN} += "xyz.openbmc_project.eventsensor.service"
SYSTEMD_SERVICE_${PN} += "xyz.openbmc_project.socsensor.service"
SYSTEMD_SERVICE_${PN} += "xyz.openbmc_project.psuevent.service"

